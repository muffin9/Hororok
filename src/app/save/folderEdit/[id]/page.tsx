"use client";

import useGetFolderList from "@/Hooks/Api/useGetFolderList";
import FolderEdit from "@/components/SaveSection/FolderEdit";
import TopNavigation from "@/components/common/TopNavigation";

type FolderIdProps = {
  params: { id: number };
};

const FolderEditPage = ({ params }: FolderIdProps) => {
  const { folderList } = useGetFolderList(+params.id);

  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="" />
      <FolderEdit folderList={folderList} />
    </main>
  );
};

export default FolderEditPage;
