import KakaoMap from "@/components/KakaoMap";
import PlanResultSection from "@/components/PlanSection/PlanResultSection";
import RePlanButton from "@/components/PlanSection/RePlanButton";

export default async function PlanResult() {
  return (
    <main className="relative">
      <KakaoMap>
        <RePlanButton />
      </KakaoMap>
      <PlanResultSection />
    </main>
  );
}
