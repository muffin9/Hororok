import { planCafeHeader } from "@/app/constants";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import ShareButton from "@/components/common/ShareButton";
import { useState } from "react";
import { PlanMatchType } from "@/interfaces/Cafe";

interface SimilarHeaderProps {
  resultPlanInfos: PlanMatchType;
}

const SimilarHeader = ({ resultPlanInfos }: SimilarHeaderProps) => {
  const [isMore, setIsMore] = useState(false);
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
              <ShareButton cafeId={resultPlanInfos.similarCafes[0]?.id}>
                <Icon type="share" size="small" alt="공유하기" />
              </ShareButton>
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
    </div>
  );
};

export default SimilarHeader;
