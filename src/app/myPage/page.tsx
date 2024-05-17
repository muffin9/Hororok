import MyPageSection from "@/components/MyPageSection";
import MyNavigation from "@/components/MyPageSection/MyNavigation";

export default function MyPage() {
  return (
    <section className="h-full bg-white overflow-y-scroll">
      <MyNavigation title="" />
      <MyPageSection />
    </section>
  );
}
