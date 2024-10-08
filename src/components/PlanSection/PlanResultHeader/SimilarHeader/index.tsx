import { planCafeHeader } from "@/app/constants";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { useMemo, useState } from "react";
import { CafeShareListType, PlanMatchType } from "@/interfaces/Cafe";
import ShareListButton from "@/components/common/ShareListButton";

interface SimilarHeaderProps {
  resultPlanInfos: PlanMatchType;
}

const SimilarHeader = ({ resultPlanInfos }: SimilarHeaderProps) => {
  const [isMore, setIsMore] = useState(false);
  const keywords = [] as string[];

  if (resultPlanInfos) {
    Object.keys(resultPlanInfos.categoryKeywords).forEach((key) => {
      resultPlanInfos.categoryKeywords[key].forEach((keyword) => {
        keywords.push(keyword);
      });
    });
  }

  const processedCafes = useMemo(() => {
    return resultPlanInfos.similarCafes.reduce((acc, cafe) => {
      const { id, name, imageUrl } = cafe;
      acc.push({ id, name, imageUrl: `http:${imageUrl}` });
      return acc;
    }, [] as CafeShareListType[]);
  }, [resultPlanInfos.matchCafes]);

  return (
    <div>
      <div className="flex flex-col gap-2 whitespace-pre-wrap">
        <Text size="large">{planCafeHeader.similarCafes.title}</Text>
        <Text size="small" className="text-gray-700">
          {planCafeHeader.similarCafes.subTitle}
        </Text>
      </div>
      <button className="flex gap-2 my-4" onClick={() => setIsMore(!isMore)}>
        <Text size="medium" className="text-gray-800">
          내가 선택한 조건보기
        </Text>
        <Icon
          size="small"
          type={isMore ? "arrow_up" : "arrow_under"}
          alt="arrow"
        />
      </button>
      {isMore && (
        <>
          <div className="flex justify-between mb-3">
            <Text size="medium" weight="bold">
              {resultPlanInfos.visitDateTime}
            </Text>
            <div className="flex gap-4 cursor-pointer">
              <ShareListButton
                title={resultPlanInfos.locationName}
                planId={resultPlanInfos.planId}
                cafeList={processedCafes}
              />
              {/* <Icon type="bookmark" size="small" alt="북마크" /> */}
            </div>
          </div>
          <div>
            <Text size="medium" weight="bold">
              {resultPlanInfos.locationName}
            </Text>
            &#39;&#40;으&#41;&#39;로부터{" "}
            <Text size="medium" weight="bold">
              {resultPlanInfos.minutes}분이내
            </Text>{" "}
            <br />
            <Text size="medium" weight="bold">
              {resultPlanInfos?.categoryKeywords?.purpose[0]}
            </Text>
            하기 좋은 카페를 찾았어요!
          </div>
          <div className="flex gap-1.5 my-4">
            {keywords.slice(0, 5).map((keyword: string) => {
              return (
                <button
                  key={keyword}
                  className="h-[31px] px-3 rounded-xl border-[1px] border-solid border-primary-300 bg-subcolor"
                >
                  <Text size="small" className="text-primary-300">
                    {keyword}
                  </Text>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default SimilarHeader;
