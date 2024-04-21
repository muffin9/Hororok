import { FolderType } from "@/interfaces/Save";
import useBookMarkMutation from "./useBookMarkMutation";
import { getFolderList } from "@/apis/save";

const useToggleBookmark = (cafeId: number) => {
  const { postBookmark, deleteBookmark } = useBookMarkMutation();

  const toggleBookmark = async (folderId: number) => {
    const { data: folderList } = await getFolderList(folderId);
    const findFolder: FolderType = folderList.folders.find(
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
