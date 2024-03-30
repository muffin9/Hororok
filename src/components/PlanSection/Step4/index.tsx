"use client";

import Condition from "@/components/Condition";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import usePlanStore from "@/store/\bplanStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Step4 = () => {
  const router = useRouter();
  const setCurrentStep = usePlanStore((state) => state.setCurrentStep);

  setCurrentStep("4");

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (category: string) => {
    if (selectedItems.length === 5 && !selectedItems.includes(category)) {
      return;
    }

    if (selectedItems.includes(category)) {
      setSelectedItems(selectedItems.filter((item) => item !== category));
    } else {
      setSelectedItems([...selectedItems, category]);
    }
  };

  const checkSelected = (clickedCategory: string) => {
    return selectedItems.includes(clickedCategory);
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
