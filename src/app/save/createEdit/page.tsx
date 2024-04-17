import SaveCreateEdit from "@/components/SaveSection/SaveCreateEdit";
import TopNavigation from "@/components/common/TopNavigation";

export default function SaveCreateEditPage() {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="새 폴더 추가" />
      <SaveCreateEdit />
    </main>
  );
}
