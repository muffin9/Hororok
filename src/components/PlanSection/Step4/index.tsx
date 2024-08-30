"use client";

import useKeyword from "@/Hooks/Keyword/useKeyword";
import useHandleKeySearchInput from "@/Hooks/useHandleKeySearchInput";
import { postSearchListToPlan } from "@/apis/plans";
import Condition from "@/components/Condition";
import Text from "@/components/common/Text";
import usePlanStore from "@/store/usePlanStore";
import useCategoryKeywordStore from "@/store/useCategoryKeywordStore";
import usePlanMatchStore from "@/store/usePlanMatchStore";
import { useRouter } from "next/navigation";
import { filterDatas } from "@/app/constants";
import SubmitButton from "@/components/FilterSection/SubmitButton";
import RefreshButton from "@/components/common/RefreshButton";
import useGeolocation from "@/Hooks/useGeolocation";
import { convertRequestKeywords } from "@/utils";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";

const Step4 = () => {
  const router = useRouter();
  const { searchInputValue } = useHandleKeySearchInput();
  const { formData } = usePlanStore();
  const { categoryKeywords, resetKeywords } = useCategoryKeywordStore();
  const { latitude, longitude } = useGeolocation();
  // const setCurrentStep = usePlanStore((state) => state.setCurrentStep);

  const {
    handlePopularItemClick,
    handleItemClick,
    checkSelected,
    checkKeywordDisabledSubmit,
    onClickRefresh,
    calculatedPopularKeywordIds,
  } = useKeyword();
  const { setMatchPlan } = usePlanMatchStore();
  const { setSearchResultList } = useSearcResultListStorehPlace();

  const onSubmit = async () => {
    const convertPlanData = {
      startTime: `${formData.startTime.hour}:${formData.startTime.minute}`,
      endTime: `${formData.endTime.hour}:${formData.endTime.minute}`,
      latitude: formData.latitude || latitude,
      longitude: formData.longitude || longitude,
      minutes: formData.minutes,
      date: formData.date,
      locationName: searchInputValue,
      keywords: convertRequestKeywords(categoryKeywords),
    };

    const planResultInfo = await postSearchListToPlan(convertPlanData);

    setMatchPlan(planResultInfo);
    if (planResultInfo.matchCafes)
      setSearchResultList(planResultInfo.matchCafes);
    resetKeywords();
    router.push(
      `/plan/result?latitude=${convertPlanData.latitude}&longitude=${convertPlanData.longitude}`
    );
  };

  return (
    <div>
      <div className="px-4">
        <header className="flex flex-col gap-2">
          <Text size="x2Large" weight="bold">
            원하는 조건을 선택해주세요.
          </Text>
        </header>
        <Condition
          handlePopularItemClick={handlePopularItemClick}
          handleItemClick={handleItemClick}
          checkSelected={checkSelected}
          calculatedPopularKeywordIds={calculatedPopularKeywordIds}
          filterDatas={filterDatas}
          maxSelectCount={5}
        />
      </div>
      <div className="w-[380px] fixed bottom-0 flex h-[50px] border-t-[1px] border-silver">
        <RefreshButton onClickRefresh={onClickRefresh} />
        <SubmitButton
          onSubmit={onSubmit}
          isDisabled={checkKeywordDisabledSubmit}
        />
      </div>
    </div>
  );
};

export default Step4;
