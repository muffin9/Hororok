import { BookmarkType } from "@/interfaces/Save";
import useBookMarkMutation from "./useBookMarkMutation";
import { getFolderList } from "@/apis/save";
import { useQueryClient } from "@tanstack/react-query";

const useToggleBookmark = () => {
  const { postBookmark, deleteBookmark } = useBookMarkMutation();
  const queryClient = useQueryClient();

  const toggleBookmark = async (cafeId: number, folderId: number) => {
    const data = await getFolderList(folderId);

    if (data && data.bookmarks.length > 0) {
      const findFolder = data.bookmarks.find((folder: BookmarkType) => {
        return folder.cafeId === cafeId;
      });

      if (findFolder) {
        await deleteBookmark(findFolder.cafeId);
      } else {
        await postBookmark({ cafeId, folderId });
      }
    } else {
      postBookmark({ cafeId, folderId });
    }
    queryClient.invalidateQueries({ queryKey: ["getBookmark"] });
    queryClient.refetchQueries({ queryKey: ["getBookmark"] });
  };

  return { toggleBookmark };
};

export default useToggleBookmark;
