import { patchSavePlan } from "@/apis/plans";
import { useState } from "react";

const useHandleBookmark = () => {
  const [currentSelectCafeId, setCurrentSelectCafeId] = useState<number>(0);

  const handleClickBookmark = (
    e: React.SyntheticEvent<HTMLButtonElement>,
    cafeId: number,
    planId?: number,
  ) => {
    e.stopPropagation();
    setCurrentSelectCafeId(cafeId);
    if (planId) patchSavePlan(planId);
  };

  return { currentSelectCafeId, handleClickBookmark };
};

export default useHandleBookmark;
