import Improvement from "@/components/MyPageSection/Improvement";
import TopNavigation from "@/components/common/TopNavigation";

export default function ImprovementPage() {
  return (
    <section className="h-full relative flex flex-col bg-white">
      <TopNavigation title="개선의견 남기기" />
      <Improvement />
    </section>
  );
}
