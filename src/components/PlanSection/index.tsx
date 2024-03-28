import BackButton from "@/components/common/BackButton";
import Icon from "@/components/common/Icon";
import ProgressBar from "@/components/common/ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

interface PlanSectionProps {
  planId: "1" | "2" | "3" | "4";
}

const PlanSection = ({ planId }: PlanSectionProps) => {
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

  return (
    // zustand로 planData가 가공 필요.
    <section className="h-full px-4 overflow-y-scroll">
      <header className="flex flex-col gap-4 pt-12">
        <div className="flex justify-between">
          <BackButton />
          <button>
            <Icon type="close" size="small" alt="close" />
          </button>
        </div>
        <ProgressBar currentStep={planId} bgColor={"bg-primary-300"} />
      </header>
      <div className="h-full mt-10">{renderPlanStep()}</div>
    </section>
  );
};

export default PlanSection;
