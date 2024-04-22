import SaveCreateEdit from "@/components/SaveSection/SaveCreateEdit";
import TopNavigation from "@/components/common/TopNavigation";

export default function SaveCreateEditPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="폴더 수정하기" />
      <SaveCreateEdit paramId={+params.id} />
    </main>
  );
}
