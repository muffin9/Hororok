import { getFolderList } from "@/apis/save";
import { useQuery } from "@tanstack/react-query";
import { FolderType } from "@/interfaces/Save";
import useBookMarkMutation from "./useBookMarkMutation";

const useToggleBookmark = (cafeId: number) => {
  const { postBookmark, deleteBookmark } = useBookMarkMutation();

  const { data: folderList } = useQuery({
    queryKey: ["FolderList", cafeId],
    queryFn: () => getFolderList(cafeId),
  });

  const toggleBookmark = (folderId: number) => {
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
