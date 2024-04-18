import FolderList from "@/components/SaveSection/FolderList";
import TopNavigation from "@/components/common/TopNavigation";

export default function FolderListPage() {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="나의 폴더 편집" />
      <FolderList />
    </main>
  );
}
