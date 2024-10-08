"use client";

import Text from "@/components/common/Text";
import { useRouter } from "next/navigation";
import PlanResultHeader from "../PlanResultHeader";
import Button from "@/components/common/Button";
import usePlanMatchStore from "@/store/usePlanMatchStore";
import { useState } from "react";
import CardResultCafeInfo from "@/components/CardResultCafeInfo";

const PlanResultSection = () => {
  const router = useRouter();

  const { resultPlanInfos } = usePlanMatchStore();

  const [isMatchCafeButton, setIsMatchCafeButton] = useState(true);

  const calculatedResultInfoList = () => {
    switch (resultPlanInfos.matchType) {
      case "MATCH":
        return resultPlanInfos.matchCafes;
      case "SIMILAR":
        return resultPlanInfos.similarCafes;
      case "MISMATCH":
        return resultPlanInfos.recommendCafes;
      default:
        return resultPlanInfos.recommendCafes;
    }
  };

  return (
    <section className="w-[380px] h-1/2 flex flex-col justify-between z-[1000] py-4 bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl shadow-xl overflow-x-hidden overflow-y-scroll">
      {resultPlanInfos && (
        <>
          <PlanResultHeader />
          <CardResultCafeInfo
            cafeDatas={calculatedResultInfoList()}
            planId={resultPlanInfos.planId}
          />
          {resultPlanInfos.matchType === "MATCH" &&
            resultPlanInfos.similarCafes.length > 0 &&
            (isMatchCafeButton ? (
              <Button
                size="small"
                className="w-[128px] h-[38px] mb-[40px] m-auto bg-white border-[1px] border-solid border-gray-200"
                onClick={() => setIsMatchCafeButton(false)}
              >
                <Text size="small" className="text-primary-300">
                  비슷한 카페도 보기
                </Text>
              </Button>
            ) : (
              <CardResultCafeInfo cafeDatas={resultPlanInfos.similarCafes} />
            ))}
          <div className="px-4">
            <Button
              size="small"
              onClick={() => router.push("/map")}
              className="w-[350px] h-[50px] sticky bottom-0"
            >
              홈으로 돌아가기
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default PlanResultSection;
