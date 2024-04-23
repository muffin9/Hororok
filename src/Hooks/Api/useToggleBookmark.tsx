import { FolderType } from "@/interfaces/Save";
import useBookMarkMutation from "./useBookMarkMutation";
import { getFolderList } from "@/apis/save";

const useToggleBookmark = (cafeId: number) => {
  const { postBookmark, deleteBookmark } = useBookMarkMutation();

  const toggleBookmark = async (folderId: number) => {
    const data = await getFolderList(folderId);
    console.log(data);
    if (data && data.bookmarks.length > 0) {
      const findFolder: FolderType = data.bookmarks.find(
        (folder: FolderType) => {
          return folder.folderId === folderId;
        }
      );
      console.log(findFolder);
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
