import { planCafeHeader } from "@/app/constants";
import Icon from "@/components/common/Icon";
import ShareButton from "@/components/common/ShareButton";
import Text from "@/components/common/Text";
import usePlanMatchStore from "@/store/usePlanMatchStore";
import SimilarHeader from "./SimilarHeader";
import useHandleBookmark from "@/Hooks/useHandleBookmark";
import useIsLoggedIn from "@/Hooks/useLoggedIn";
import useToastStore from "@/store/useToastStore";

const PlanResultHeader = () => {
  const isLoggedIn = useIsLoggedIn();

  const { resultPlanInfos } = usePlanMatchStore();
  const { handleClickBookmark } = useHandleBookmark();
  const { showMessage } = useToastStore();
  const keywords = [] as string[];

  if (resultPlanInfos) {
    Object.keys(resultPlanInfos.categoryKeywords).forEach((key) => {
      resultPlanInfos.categoryKeywords[key].forEach((keyword) => {
        keywords.push(keyword);
      });
    });
  }

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
                  cafeId={resultPlanInfos.matchCafes[0]?.id}
                  planId={resultPlanInfos.planId}
                  cafeInfo={{
                    title: resultPlanInfos.visitDateTime,
                    description: resultPlanInfos.locationName,
                    imageUrl: resultPlanInfos?.matchCafes[0]?.imageUrl,
                    linkUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cafe/${resultPlanInfos?.matchCafes[0]?.id}`,
                  }}
                />
                {/* <button
                  onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                    if (!isLoggedIn) {
                      alert("로그인이 필요합니다.");
                      return;
                    }

                    handleClickBookmark(
                      e,
                      resultPlanInfos.matchCafes[0].id,
                      resultPlanInfos.planId
                    );
                    showMessage(
                      `${resultPlanInfos.locationName}을 내 계획에 추가했어요`
                    );
                  }}
                >
                  <Icon type="bookmark" size="small" alt="북마크" />
                </button> */}
              </div>
            </div>
            <div>
              <Text size="medium" weight="bold">
                {resultPlanInfos.locationName}
              </Text>
              으로부터{" "}
              <Text size="medium" weight="bold">
                {resultPlanInfos.minutes}분이내 카페를 찾았어요!
              </Text>{" "}
              <br />
            </div>
            <div className="flex gap-1.5 mb-4">
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
        {resultPlanInfos.matchType === "SIMILAR" && (
          <SimilarHeader resultPlanInfos={resultPlanInfos} />
        )}
        {resultPlanInfos.matchType === "MISMATCH" && (
          <div className="flex flex-col gap-2 whitespace-pre-wrap mb-2">
            <Text size="large">{planCafeHeader.recommendCafes.title}</Text>
            <Text size="small" className="text-gray-700 underline">
              &nbsp;{resultPlanInfos.locationName}&nbsp;
              {planCafeHeader.recommendCafes.subTitle}
            </Text>
          </div>
        )}
      </header>
    </>
  );
};

export default PlanResultHeader;
