import FolderEdit from "@/components/SaveSection/FolderEdit";
import TopNavigation from "@/components/common/TopNavigation";

export default function FolderEditPage() {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="나의 폴더 편집" />
      <FolderEdit />
    </main>
  );
}
