"use client";

import { postSearchListToPlan } from "@/apis/plans";
import Condition from "@/components/Condition";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import usePlanStore from "@/store/\bplanStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Step4 = () => {
  const router = useRouter();
  const formData = usePlanStore((state) => state.formData);
  // const setCurrentStep = usePlanStore((state) => state.setCurrentStep);
  const setFormData = usePlanStore((state) => state.setFormData);

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

    setFormData({
      ...formData,
      keywords: selectedItems,
    });
  };

  const checkSelected = (clickedCategory: string) => {
    return selectedItems.includes(clickedCategory);
  };

  const checkDisabledSubmit = () => {
    const targetValues = [
      "개인작업/노트북",
      "데이트",
      "단체회식",
      "애견동반",
      "가족모임",
      "비즈니스미팅",
      "기념일",
      "친목/나들이",
    ];

    return !selectedItems.some((item) => targetValues.includes(item));
  };

  const onClickSubmit = async () => {
    const data = await postSearchListToPlan({
      startTime: `${formData.startTime.hour}-${formData.startTime.minute}`,
      endTime: `${formData.endTime.hour}-${formData.endTime.minute}`,
      latitude: formData.latitude,
      longitude: formData.longitude,
      minutes: formData.minutes,
      date: formData.date,
      keywords: formData.keywords,
    });

    router.push(
      `/plan/result?latitude=${formData.latitude}&longitude=${formData.longitude}`
    );
  };

  // useEffect(() => {
  //   setCurrentStep("4");
  // }, []);

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
      <Button
        size="full"
        onClick={onClickSubmit}
        disabled={checkDisabledSubmit()}
      >
        결과보기
      </Button>
    </div>
  );
};

export default Step4;
