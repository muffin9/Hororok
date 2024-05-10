import MySetting from "@/components/MyPageSection/MySetting";
import TopNavigation from "@/components/common/TopNavigation";

export default function MyPage() {
  return (
    <section className="h-full bg-white">
      <TopNavigation title="" />
      <MySetting />
    </section>
  );
}
