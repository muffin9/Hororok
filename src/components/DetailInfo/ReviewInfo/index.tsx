import useGetReviewInfo from "@/Hooks/Api/useGetReviewInfo";
import useMoreData from "@/Hooks/useMoreData";
import Icon from "@/components/common/Icon";
import MoreButton from "@/components/common/MoreButton";
import Star from "@/components/common/Star";
import Text from "@/components/common/Text";
import { CafeReviewType, ReviewType } from "@/interfaces/Cafe";
import Image from "next/image";

interface ReviewInfoProps {
  cafeId: string;
  page?: string;
}

const ReviewInfo = ({ cafeId, page = "" }: ReviewInfoProps) => {
  const { reviewInfo }: { reviewInfo: CafeReviewType } = useGetReviewInfo(
    cafeId,
    1,
    page
  );

  const { showMore, handleClickMoreButton } = useMoreData();

  const visibleReviewData =
    !showMore && page !== "all"
      ? reviewInfo?.reviews.slice(0, 2)
      : reviewInfo?.reviews;

  return (
    visibleReviewData && (
      <section>
        <div className="flex flex-col gap-4 bg-white p-4 border-b-[1px] border-solid border-gray-200">
          <Text size="large" weight="bold">
            유저들이 뽑은 키워드
          </Text>
          <div className="flex justify-between flex-wrap gap-5">
            {reviewInfo.userChoiceKeywords &&
              reviewInfo.userChoiceKeywords.map((cafeKeyword, idx) => {
                return (
                  <div
                    className="w-[137px] flex gap-[2px]"
                    key={cafeKeyword.name}
                  >
                    <Text size="small">{idx + 1}</Text>
                    <Text size="small">{cafeKeyword.name}</Text>
                    <Text size="small" className="text-gray-700">
                      {cafeKeyword.count}+
                    </Text>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="h-full flex flex-col gap-4 border-b-[1px] border-solid border-gray-200 py-6 bg-white">
          <header className="px-4">
            <Text size="large" weight="bold">
              리뷰
            </Text>
          </header>
          {reviewInfo.reviews.length === 0 ? (
            <div className="h-full flex flex-col justify-center items-center">
              <Icon type="review" size="xLarge" alt="review" />
              <Text size="small" weight="bold" className="text-gray-600">
                아직 등록된 리뷰가 없어요
              </Text>
            </div>
          ) : (
            visibleReviewData.map((review: ReviewType) => {
              return (
                <article
                  key={review.id}
                  className="px-4 border-gray-200 border-b-[1px] pb-6"
                >
                  <header className="flex justify-between">
                    <div className="flex gap-3">
                      <Image
                        src={"/assets/Images/profile.png"}
                        width={44}
                        height={44}
                        alt="profile image"
                      />
                      <div className="flex flex-col gap-[6px]">
                        <Text size="small">
                          {review.userNickname || "익명"}
                        </Text>
                        <div className="flex">
                          <Star
                            starSize="xSmall"
                            starScore={review.starRating}
                          />
                        </div>
                      </div>
                    </div>
                    <Text size="extraSmall" className="text-gray-700">
                      {review.createdDate}
                    </Text>
                  </header>
                  <div className="flex flex-col gap-3.5">
                    <div className="flex flex-col gap-4 mt-7">
                      <div className="flex items-center gap-3">
                        <Icon size="small" type="review" alt="review" />
                        <Text size="small">{review.content}</Text>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon size="small" type="star" alt="star" />
                        <Text size="small">{review.specialNote}</Text>
                      </div>
                    </div>
                    <div className="flex gap-1.5 overflow-scroll">
                      {review.images.map((image) => {
                        return (
                          <div
                            key={image.id}
                            style={{
                              backgroundImage: `url(http:${image.imageUrl})`,
                            }}
                            className="w-[100px] h-[100px] rounded-lg"
                          />
                        );
                      })}
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <Text size="small" className="text-gray-800">
                        추천메뉴
                      </Text>
                      <div className="text-gray-800 mb-[-1px]">|</div>
                      <div className="flex gap-1.5"></div>
                      {review.recommendMenus.slice(0, 2).map((keyword) => {
                        return (
                          <button
                            key={keyword}
                            className="h-[31px] px-3 rounded-3xl border-[1px] border-solid border-silver"
                          >
                            <Text size="small">{keyword}</Text>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })
          )}

          {visibleReviewData.length >= 3 && !showMore && page !== "all" && (
            <div className="w-[calc(100%)] h-[1px] relative bg-gray-200 mt-[33px] mb-[38px]">
              <MoreButton
                text={"리뷰 더보기"}
                handleClickMoreButton={handleClickMoreButton}
              />
            </div>
          )}
        </div>
      </section>
    )
  );
};

export default ReviewInfo;
