import axiosInstance from "@/apis/apiClient";
import { apiSearchUrl } from "@/app/constants";
import useToastStore from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useReviewMutation = () => {
  const { showMessage } = useToastStore();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutateAsync: postReview } = useMutation({
    mutationFn: async (formData: FormData) => {
      return axiosInstance.post(`${apiSearchUrl}/review/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: (data) => {
      if (data.status === 200) {
        console.log(data);
        const cafeId = data.data.cafeId;
        showMessage(`리뷰가 등록되었습니다.`);
        queryClient.invalidateQueries({
          queryKey: ["getReviewInfo", cafeId],
        });
        return true;
      } else return false;
    },
  });

  const { mutateAsync: deleteReview } = useMutation({
    mutationFn: async (reviewId: number) => {
      return axiosInstance.delete(`${apiSearchUrl}/review/${reviewId}/delete`);
    },
    onSuccess: (data) => {
      if (data) {
        showMessage(`리뷰가 삭제되었습니다.`);
        queryClient.invalidateQueries({ queryKey: ["getUserReviews"] });
      }
    },
  });

  const { mutateAsync: patchReview } = useMutation({
    mutationFn: async ({
      reviewId,
      formData,
    }: {
      reviewId: number;
      formData: FormData;
    }) => {
      return axiosInstance.patch(
        `${apiSearchUrl}/review/${reviewId}/edit`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: (data) => {
      if (data) {
        showMessage(`리뷰가 수정되었습니다.`);
        router.push(`/myPage`);
      }
    },
  });

  return { postReview, patchReview, deleteReview };
};

export default useReviewMutation;
