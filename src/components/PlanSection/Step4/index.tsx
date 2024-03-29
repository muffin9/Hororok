"use client";

import Condition from "@/components/Condition";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import usePlanStore from "@/store/\bplanStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SelectedItemsState = {
  [filterId: string]: string | undefined;
};

const Step4 = () => {
  const router = useRouter();
  const setCurrentStep = usePlanStore((state) => state.setCurrentStep);

  setCurrentStep("4");

  const [selectedItems, setSelectedItems] = useState<SelectedItemsState>({});
  const handleItemClick = (filterId: string, itemId: string) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [filterId]: prevState[filterId] === itemId ? undefined : itemId,
    }));
  };

  const checkSelected = (conditionId: string, clickedItemId: string) => {
    return selectedItems[conditionId] === clickedItemId;
  };

  return (
    <div>
      <header className="flex flex-col gap-3 pb-6">
        <Text size="x2Large" weight="bold">
          원하는 조건을 선택해주세요.
        </Text>
        <Text size="medium" className="text-gray-700">
          복수 선택이 가능해요
        </Text>
      </header>
      <Condition
        handleItemClick={handleItemClick}
        checkSelected={checkSelected}
      />
      <Button size="full" onClick={() => router.push("/plan/result")}>
        결과보기
      </Button>
    </div>
  );
};

export default Step4;
