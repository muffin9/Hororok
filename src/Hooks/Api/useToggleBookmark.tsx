import { FolderType } from "@/interfaces/Save";
import useBookMarkMutation from "./useBookMarkMutation";
import { getFolderList } from "@/apis/save";

const useToggleBookmark = () => {
  const { postBookmark, deleteBookmark } = useBookMarkMutation();

  const toggleBookmark = async (cafeId: number, folderId: number) => {
    // TODO : 에러 수정 필요.
    const { data: folderList } = await getFolderList(folderId);
    const findFolder: FolderType = folderList.bookmarks.find(
      (folder: FolderType) => {
        return folder.folderId === folderId;
      }
    );

    if (findFolder) {
      deleteBookmark(findFolder.folderId);
    } else {
      postBookmark({ cafeId, folderId });
    }
  };

  return { toggleBookmark };
};

export default useToggleBookmark;
