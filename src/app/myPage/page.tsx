import MyPageSection from "@/components/MyPageSection";
import TopNavigation from "@/components/common/TopNavigation";

export default function MyPage() {
  return (
    <section className="h-full bg-white">
      <TopNavigation title="" />
      <MyPageSection />
    </section>
  );
}
