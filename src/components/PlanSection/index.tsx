"use client";

import BackButton from "@/components/common/BackButton";
import Icon from "@/components/common/Icon";
import ProgressBar from "@/components/common/ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Modal from "../common/Modal";
import { useRouter } from "next/navigation";
import usePlanStore from "@/store/usePlanStore";
import { useEffect } from "react";
import useModal from "@/Hooks/useModal";

interface PlanSectionProps {
  planId: "1" | "2" | "3" | "4";
}

const PlanSection = ({ planId }: PlanSectionProps) => {
  const { setIsWrting, resetPlanStore } = usePlanStore();
  const { showModal, openModal, closeModal } = useModal();

  const router = useRouter();

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
      <section className="h-full px-4 bg-white overflow-y-scroll">
        <header className="flex flex-col gap-4 pt-12">
          <div className="flex justify-between">
            {planId === "1" ? <div /> : <BackButton />}
            <button onClick={openModal}>
              <Icon type="close" size="small" alt="close" />
            </button>
          </div>

          <ProgressBar
            width={`${(+planId / 4) * 100}%`}
            bgColor={"bg-primary-300"}
          />
        </header>
        <div className="h-full mt-10">{renderPlanStep()}</div>
      </section>
      {showModal && (
        <Modal
          title={`홈 화면으로 돌아갑니다.\n나가시면 다시 처음부터 해야해요.`}
          okButtonText="계속하기"
          cancelButtonText="나가기"
          okCallbackFunc={() => {
            setIsWrting(false);
            closeModal();
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
