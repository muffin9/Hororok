"use client";

import ProgressBar from "@/components/common/ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useRouter } from "next/navigation";
import usePlanStore from "@/store/usePlanStore";
import { useEffect } from "react";

interface PlanSectionProps {
  planId: "1" | "2" | "3" | "4";
}

const PlanSection = ({ planId }: PlanSectionProps) => {
  const { setIsWrting } = usePlanStore();

  const renderPlanStep = () => {
    switch (planId) {
      case "1":
        return <Step1 />;
      case "2":
        return <Step2 />;
      case "3":
        return <Step3 />;
      case "4":
        return <Step4 />;
    }
  };

  useEffect(() => {
    setIsWrting(true);
  }, []);

  return (
    <>
      <section className="h-[calc(100dvh)] flex flex-col gap-8 bg-white overflow-y-scroll">
        <header className="flex flex-col px-4">
          <ProgressBar
            width={`${(+planId / 4) * 100}%`}
            bgColor={"bg-primary-300"}
          />
        </header>
        {renderPlanStep()}
      </section>
    </>
  );
};

export default PlanSection;
