import { getFolderList } from "@/apis/save";
import { useQuery } from "@tanstack/react-query";

const useGetFolderList = (folderId: number) => {
  const { data: folderList, isLoading: folderListLoading } = useQuery({
    queryKey: [`FolderList_${folderId}`],
    queryFn: () => getFolderList(folderId),
  });

  return { folderList, folderListLoading };
};

export default useGetFolderList;
