import FolderEdit from "@/components/SaveSection/FolderEdit";
import TopNavigation from "@/components/common/TopNavigation";

type FolderIdProps = {
  params: { id: number };
};

const FolderEditPage = ({ params }: FolderIdProps) => {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="" />
      <FolderEdit folderId={+params.id} />
    </main>
  );
};

export default FolderEditPage;
