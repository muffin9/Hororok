import axiosInstance from "@/apis/apiClient";
import { getBookmark } from "@/apis/save";
import { apiSearchUrl } from "@/app/constants";
import useToastStore from "@/store/useToastStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  const { data: bookMarks } = useQuery({
    queryKey: ["getBookmark"],
    queryFn: () => getBookmark(),
    staleTime: 600000,
  });

  const { mutateAsync: postBookmarkFolder } = useMutation({
    mutationFn: async (folderInfo: postFolderType) => {
      return axiosInstance.post(`${apiSearchUrl}/bookmark/folder/save`, {
        name: folderInfo.name,
        color: folderInfo.color,
        isVisible: folderInfo.isVisible,
      });
    },
    onSuccess: (data) => {
      try {
        if (data.status === 204) {
          showMessage("새 폴더를 추가했어요");
          queryClient.refetchQueries({ queryKey: ["getBookmark"] });
          setTimeout(() => {
            router.push("/map");
          }, 1000);
        }
      } catch (e) {
        console.error(e);
      }
    },
  });

  const { mutateAsync: patchBookmarkFolder } = useMutation({
    mutationFn: async (folderInfo: patchFolderType) => {
      return axiosInstance.put(
        `${apiSearchUrl}/bookmark/folder/update`,
        folderInfo,
      );
    },
    onSuccess: (data) => {
      try {
        if (data.status === 204) {
          showMessage(`폴더를 수정했어요`);
          queryClient.refetchQueries({ queryKey: ["getBookmark"] });
          setTimeout(() => {
            router.push("/map");
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
        `${apiSearchUrl}/bookmark/folder/${folderId}/delete`,
      );
    },
    onSuccess: (data) => {
      try {
        if (data.status === 200) {
          showMessage(`폴더를 삭제했어요`);
          queryClient.refetchQueries({ queryKey: ["getBookmark"] });
        }
      } catch (e) {
        console.error(e);
      }
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
