import axiosInstance from "@/apis/apiClient";
import { apiSearchUrl } from "@/app/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToastStore from "@/store/useToastStore";

interface postBookmarkType {
  cafeId: number;
  folderId: number;
}

const useBookMarkMutation = () => {
  const { showMessage } = useToastStore();
  const queryClient = useQueryClient();

  const { mutateAsync: postBookmark } = useMutation({
    mutationFn: async ({ cafeId, folderId }: postBookmarkType) => {
      return axiosInstance.post(`${apiSearchUrl}/bookmark/save`, {
        cafeId,
        folderId,
      });
    },
    onSuccess: (data) => {
      try {
        if (data.status === 200) {
          const bookmarkFolderId = data.data.bookmarkFolderId;
          showMessage(`카페를 저장했어요!`);
          queryClient.refetchQueries({ queryKey: ["getBookmark"] });
          queryClient.refetchQueries({
            queryKey: [`FolderList_${bookmarkFolderId}`],
          });
        }
      } catch (e) {
        console.error(e);
      }
    },
  });

  const { mutateAsync: deleteBookmark } = useMutation({
    mutationFn: async (bookmarkId: number) => {
      return axiosInstance.delete(
        `${apiSearchUrl}/bookmark/${bookmarkId}/delete`
      );
    },
    onSuccess: (data) => {
      try {
        if (data.status === 200) {
          const bookmarkFolderId = data.data.bookmarkFolderId;
          showMessage(`카페를 삭제했어요!`);
          queryClient.refetchQueries({ queryKey: ["getBookmark"] });
          queryClient.refetchQueries({
            queryKey: [`FolderList_${bookmarkFolderId}`],
          });
        }
      } catch (e) {
        console.error(e);
      }
    },
  });

  const { mutateAsync: toggleVisible } = useMutation({
    mutationFn: async (folderId: number) => {
      return axiosInstance.patch(
        `${apiSearchUrl}/bookmark/folder/${folderId}/update/visible`
      );
    },
    onSuccess: (data) => {
      try {
        if (data.status === 204) {
          showMessage(`변경되었습니다.`);
          queryClient.refetchQueries({ queryKey: ["getBookmark"] });
        }
      } catch (e) {
        console.error(e);
      }
    },
  });

  return { postBookmark, deleteBookmark, toggleVisible };
};

export default useBookMarkMutation;
