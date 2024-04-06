import { planCafeHeader } from "@/app/constants";
import Icon from "@/components/common/Icon";
import ShareButton from "@/components/common/ShareButton";
import Text from "@/components/common/Text";
import usePlanMatchStore from "@/store/usePlanMatchStore";

const PlanResultHeader = () => {
  const { resultPlanInfos } = usePlanMatchStore();

  return (
    <header className="flex flex-col pb-4 gap-3 border-solid border-b-[1px] border-gray-200">
      {resultPlanInfos.matchType === "MATCH" && (
        <>
          <div className="flex justify-between">
            <Text size="medium" weight="bold">
              {resultPlanInfos.visitDateTime}
            </Text>
            <div className="flex gap-4">
              <ShareButton />
              <Icon type="bookmark" size="small" alt="북마크" />
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
            {resultPlanInfos?.categoryKeywords?.menu?.map((menuKeyword) => {
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
            })}
          </div>
        </>
      )}
      {resultPlanInfos.matchType === "SIMILAR" && (
        <div className="flex flex-col gap-2 whitespace-pre-wrap">
          <Text size="large">{planCafeHeader.similarCafes.title}</Text>
          <Text size="small" className="text-gray-700">
            {planCafeHeader.similarCafes.subTitle}
          </Text>
        </div>
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
  );
};

export default PlanResultHeader;
