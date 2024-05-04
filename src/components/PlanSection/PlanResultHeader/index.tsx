import { planCafeHeader } from "@/app/constants";
import Icon from "@/components/common/Icon";
import ShareButton from "@/components/common/ShareButton";
import Text from "@/components/common/Text";
import usePlanMatchStore from "@/store/usePlanMatchStore";
import SimilarHeader from "./SimilarHeader";
import useHandleBookmark from "@/Hooks/useHandleBookmark";
import useHandleBottomSheet from "@/Hooks/useHandleBottomSheet";
import { useRef } from "react";
import SaveSection from "@/components/SaveSection";
import useOutsideClick from "@/Hooks/useOutsideClick";

const PlanResultHeader = () => {
  const overlayRef = useRef(null);
  const { resultPlanInfos } = usePlanMatchStore();
  const { handleClickBookmark } = useHandleBookmark();
  const { isBottomSheet, setIsBottomSheet } = useHandleBottomSheet();

  useOutsideClick(overlayRef, () => setIsBottomSheet(false));

  return (
    <>
      <header className="flex flex-col gap-3 px-4 border-solid border-b-[1px] border-gray-200">
        {resultPlanInfos.matchType === "MATCH" && (
          <>
            <div className="flex justify-between">
              <Text size="medium" weight="bold">
                {resultPlanInfos.visitDateTime}
              </Text>
              <div className="flex gap-4 cursor-pointer">
                <ShareButton
                  cafeId={resultPlanInfos.matchCafes[0].id}
                  planId={resultPlanInfos.planId}
                >
                  <Icon type="share" size="small" alt="공유하기" />
                </ShareButton>
                <button
                  onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                    handleClickBookmark(
                      e,
                      resultPlanInfos.matchCafes[0].id,
                      resultPlanInfos.planId
                    );
                    setIsBottomSheet(!isBottomSheet);
                  }}
                >
                  <Icon type="bookmark" size="small" alt="북마크" />
                </button>
              </div>
            </div>
            <div>
              <Text size="medium" weight="bold">
                {resultPlanInfos.locationName}
              </Text>
              으로부터{" "}
              <Text size="medium" weight="bold">
                {resultPlanInfos.minutes}분이내
              </Text>{" "}
              <br />
              <Text size="medium" weight="bold">
                {resultPlanInfos?.categoryKeywords?.purpose[0]}
              </Text>
              하기 좋은 카페를 찾았어요!
            </div>
            <div className="flex gap-1.5">
              {resultPlanInfos?.categoryKeywords?.menu?.map(
                (menuKeyword: string) => {
                  return (
                    <button
                      key={menuKeyword}
                      className="h-[31px] px-3 rounded-2xl border-[1px] border-solid border-primary-300"
                    >
                      <Text size="small" className="text-primary-300">
                        {menuKeyword}
                      </Text>
                    </button>
                  );
                }
              )}
            </div>
          </>
        )}
        {resultPlanInfos.matchType === "SIMILAR" && (
          <SimilarHeader resultPlanInfos={resultPlanInfos} />
        )}
        {resultPlanInfos.matchType === "MISMATCH" && (
          <div className="flex flex-col gap-2 whitespace-pre-wrap">
            <Text size="large">{planCafeHeader.recommendCafes.title}</Text>
            <Text size="small" className="text-gray-700">
              {resultPlanInfos.locationName}
              {planCafeHeader.recommendCafes.subTitle}
            </Text>
          </div>
        )}
      </header>
      {isBottomSheet && (
        <>
          <div className="absolute top-0 left-0 w-screen h-screen" />
          <div ref={overlayRef} className="fixed bottom-0 z-[1000]">
            <SaveSection />
          </div>
        </>
      )}
    </>
  );
};

export default PlanResultHeader;
