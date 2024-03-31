"use client";

import BackButton from "@/components/common/BackButton";
import Icon from "@/components/common/Icon";
import ProgressBar from "@/components/common/ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Link from "next/link";
import Modal from "../common/Modal";
import { useRouter, useSearchParams } from "next/navigation";
import usePlanStore from "@/store/\bplanStore";
import { useEffect } from "react";

interface PlanSectionProps {
  planId: "1" | "2" | "3" | "4";
}

const PlanSection = ({ planId }: PlanSectionProps) => {
  const setIsWrting = usePlanStore((state) => state.setIsWrting);
  const resetPlanStore = usePlanStore((state) => state.resetPlanStore);

  const router = useRouter();
  const searchParams = useSearchParams();

  const show = searchParams.get("show");

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
    // zustand로 planData가 가공 필요.
    <>
      <section className="h-full px-4 bg-white overflow-y-scroll">
        <header className="flex flex-col gap-4 pt-12">
          <div className="flex justify-between">
            {planId === "1" ? <div /> : <BackButton />}
            <button>
              <Link href="?show=true">
                <Icon type="close" size="small" alt="close" />
              </Link>
            </button>
          </div>

          <ProgressBar currentStep={planId} bgColor={"bg-primary-300"} />
        </header>
        <div className="h-full mt-10">{renderPlanStep()}</div>
      </section>
      {show && (
        <Modal
          title={`홈 화면으로 돌아갑니다.\n계획했던 여정을 저장할까요?`}
          okButtonText="네, 저장할게요"
          cancelButtonText="아니요, 저장 안 할래요"
          okCallbackFunc={() => {
            setIsWrting(false);
            router.push("/");
          }}
          cancelCallbackFunc={() => {
            setIsWrting(false);
            resetPlanStore();
            router.push("/");
          }}
        />
      )}
    </>
  );
};

export default PlanSection;
