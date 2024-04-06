"use client";

import useKeyword from "@/Hooks/Keyword/useKeyword";
import useHandleKeySearchInput from "@/Hooks/useHandleKeySearchInput";
import { postSearchListToPlan } from "@/apis/plans";
import Condition from "@/components/Condition";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import usePlanStore from "@/store/usePlanStore";
import useCategoryKeywordStore from "@/store/useCategoryKeywordStore";
import usePlanMatchStore from "@/store/usePlanMatchStore";
import { useRouter } from "next/navigation";

const Step4 = () => {
  const router = useRouter();
  const { searchInputValue } = useHandleKeySearchInput();
  const { formData } = usePlanStore();
  const { categoryKeywords, resetKeywords } = useCategoryKeywordStore();
  // const setCurrentStep = usePlanStore((state) => state.setCurrentStep);

  const { handleItemClick, checkSelected, checkKeywordDisabledSubmit } =
    useKeyword();
  const { setMatchPlan } = usePlanMatchStore();

  const onClickSubmit = async () => {
    const planResultInfo = await postSearchListToPlan({
      startTime: `${formData.startTime.hour}:${formData.startTime.minute}`,
      endTime: `${formData.endTime.hour}:${formData.endTime.minute}`,
      latitude: formData.latitude,
      longitude: formData.longitude,
      minutes: formData.minutes,
      date: formData.date,
      locationName: searchInputValue,
      categoryKeywords: categoryKeywords,
    });

    setMatchPlan(planResultInfo);
    resetKeywords();
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
        disabled={checkKeywordDisabledSubmit()}
      >
        결과보기
      </Button>
    </div>
  );
};

export default Step4;
