import { BookmarkType, FolderType } from "@/interfaces/Save";
import useBookMarkMutation from "./useBookMarkMutation";
import { getFolderList } from "@/apis/save";

const useToggleBookmark = () => {
  const { postBookmark, deleteBookmark } = useBookMarkMutation();

  const toggleBookmark = async (cafeId: number, folderId: number) => {
    const data = await getFolderList(folderId);

    if (data && data.bookmarks.length > 0) {
      const findFolder: FolderType = data.bookmarks.find(
        (folder: BookmarkType) => {
          return folder.cafeId === cafeId;
        }
      );

      if (findFolder) {
        await deleteBookmark(findFolder.folderId);
      } else {
        await postBookmark({ cafeId, folderId });
      }
    } else {
      postBookmark({ cafeId, folderId });
    }
  };

  return { toggleBookmark };
};

export default useToggleBookmark;
