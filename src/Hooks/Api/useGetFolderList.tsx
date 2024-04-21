import { getFolderList } from "@/apis/save";
import { useQuery } from "@tanstack/react-query";

const useGetFolderList = (folderId: number) => {
  const { data: folderList } = useQuery({
    queryKey: ["FolderList", folderId],
    queryFn: () => getFolderList(folderId),
  });

  return { folderList };
};

export default useGetFolderList;
