import MySetting from "@/components/MyPageSection/MySetting";
import TopButtonAndLogo from "@/components/common/TopButtonAndLogo";

export default function MyPage() {
  return (
    <section className="h-full bg-white">
      <TopButtonAndLogo />
      <MySetting />
    </section>
  );
}
