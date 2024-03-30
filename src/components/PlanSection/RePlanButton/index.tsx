"use client";

import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import usePlanStore from "@/store/\bplanStore";
import { useRouter } from "next/navigation";

const RePlanButton = () => {
  const router = useRouter();
  const resetPlanStore = usePlanStore((state) => state.resetPlanStore);

  const onClickRePlan = async () => {
    resetPlanStore();
    router.push(`/plan/1`);
  };

  return (
    <button
      className="absolute bottom-[14px] left-1/2 transform -translate-x-1/2 h-[38px] px-2 flex items-center gap-[4px] m-auto bg-white rounded-lg z-[1000]"
      onClick={onClickRePlan}
    >
      <Icon size="small" type="arrow_left" alt="arrow_left" />
      <Text size="small" className="text-primary-300">
        다시 계획하기
      </Text>
    </button>
  );
};

export default RePlanButton;
