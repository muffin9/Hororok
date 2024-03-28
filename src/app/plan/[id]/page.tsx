import PlanSection from "@/components/PlanSection";

type PlanIdProps = {
  params: {
    id: "1" | "2" | "3" | "4";
  };
};

export default async function Plan({ params }: PlanIdProps) {
  return <PlanSection planId={params.id} />;
}
