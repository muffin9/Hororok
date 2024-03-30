import KakaoMap from "@/components/KakaoMap";
import PlanResultSection from "@/components/PlanSection/PlanResultSection";

export default async function PlanResult() {
  return (
    <main className="relative">
      <KakaoMap>
        <button>다시 계획하기</button>
      </KakaoMap>
      <PlanResultSection />
    </main>
  );
}
