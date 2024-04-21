import axiosInstance from "@/apis/apiClient";
import { apiSearchUrl } from "@/app/constants";
import { useMutation } from "@tanstack/react-query";
import useToastStore from "@/store/useToastStore";

interface postBookmarkType {
  cafeId: number;
  folderId: number;
}

const useBookMarkMutation = () => {
  const { showMessage } = useToastStore();

  const { mutateAsync: postBookmark } = useMutation({
    mutationFn: async ({ cafeId, folderId }: postBookmarkType) => {
      return axiosInstance.post(`${apiSearchUrl}/bookmark/save`, {
        cafeId,
        folderId,
      });
    },
    onSuccess: () => {
      showMessage(`카페를 저장했어요!`);
    },
  });

  const { mutateAsync: deleteBookmark } = useMutation({
    mutationFn: async (bookmarkId: number) => {
      return axiosInstance.delete(
        `${apiSearchUrl}/bookmark/delete/${bookmarkId}`
      );
    },
    onSuccess: () => {
      showMessage(`카페를 삭제했어요!`);
    },
  });

  return { postBookmark, deleteBookmark };
};

export default useBookMarkMutation;