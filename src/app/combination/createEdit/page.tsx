import CombinationEdit from "@/components/CombinationEdit";
import TopNavigation from "@/components/common/TopNavigation";

export default function CombinationCreatePage() {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="조합하기" />
      <CombinationEdit />
    </main>
  );
}
