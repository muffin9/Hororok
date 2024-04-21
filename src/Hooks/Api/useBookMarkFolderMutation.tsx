import axiosInstance from "@/apis/apiClient";
import { getBookmark } from "@/apis/save";
import { apiSearchUrl } from "@/app/constants";
import { BookMarksType } from "@/interfaces/Save";
import useToastStore from "@/store/useToastStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface postFolderType {
  name: string;
  color: string;
  isVisible: boolean;
}

interface patchFolderType {
  folderId: number;
  name: string;
  color: string;
  isVisible: boolean;
}

const useBookMarkFolderMutation = () => {
  const router = useRouter();
  const { showMessage } = useToastStore();

  const { data: bookMarks } = useQuery({
    queryKey: ["getBookmark"],
    queryFn: () => getBookmark(),
  });

  const { mutateAsync: postBookmarkFolder } = useMutation({
    mutationFn: async (folderInfo: postFolderType) => {
      return axiosInstance.post(`${apiSearchUrl}/bookmark/folder/save`, {
        folderInfo,
      });
    },
    onSuccess: () => {
      showMessage("새 폴더를 추가했어요");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    },
  });

  const { mutateAsync: patchBookmarkFolder } = useMutation({
    mutationFn: async (folderInfo: patchFolderType) => {
      return axiosInstance.patch(`${apiSearchUrl}/bookmark/folder/update`, {
        folderInfo,
      });
    },
    onSuccess: ({ data }: { data: BookMarksType }) => {
      try {
        if (data) {
          showMessage(`폴더를 수정했어요`);
          setTimeout(() => {
            router.push("/");
          }, 1000);
        }
      } catch (e) {
        console.error(e);
      }
    },
  });

  const { mutateAsync: deleteBookmarkFolder } = useMutation({
    mutationFn: async (folderId: number) => {
      return axiosInstance.delete(
        `${apiSearchUrl}/bookmark/folder/${folderId}/delete`
      );
    },
    onSuccess: () => {
      showMessage(`폴더를 삭제했어요`);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    },
  });

  return {
    bookMarks,
    postBookmarkFolder,
    patchBookmarkFolder,
    deleteBookmarkFolder,
  };
};

export default useBookMarkFolderMutation;
