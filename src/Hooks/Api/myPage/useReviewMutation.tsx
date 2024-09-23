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
        const cafeId = data.data.cafeId;
        showMessage(`리뷰가 등록되었습니다.`);
        queryClient.refetchQueries({
          queryKey: [`getReviewInfo_${cafeId}`],
        });
        router.push(`/cafe/${cafeId}`);
      }
    },
    onError: (error) => {
      console.error("Error create review:", error);
      showMessage("리뷰가 등록되지 않았습니다. 다시 시도해 주세요.");
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
    onError: (error) => {
      console.error("Error delete review:", error);
      showMessage("리뷰가 삭제되지 않았습니다. 다시 시도해 주세요.");
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
        },
      );
    },
    onSuccess: (data) => {
      if (data) {
        showMessage(`리뷰가 수정되었습니다.`);
        queryClient.invalidateQueries({ queryKey: ["getUserReviews"] });
        router.push(`/myPage`);
      }
    },
    onError: (error) => {
      console.error("Error edit review:", error);
      showMessage("리뷰가 수정되지 않았습니다. 다시 시도해 주세요.");
    },
  });

  return { postReview, patchReview, deleteReview };
};

export default useReviewMutation;
