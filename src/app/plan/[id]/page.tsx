import PlanSection from "@/components/PlanSection";
import TopButtonAndLogo from "@/components/common/TopButtonAndLogo";

type PlanIdProps = {
  params: {
    id: "1" | "2" | "3" | "4";
  };
};

export default async function Plan({ params }: PlanIdProps) {
  return (
    <main className="h-full overflow-y-scroll">
      <TopButtonAndLogo />
      <PlanSection planId={params.id} />
    </main>
  );
}
