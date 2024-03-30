import useMoreData from "@/Hooks/useMoreData";
import Icon from "@/components/common/Icon";
import MoreButton from "@/components/common/MoreButton";
import Star from "@/components/common/Star";
import Text from "@/components/common/Text";
import { ReviewType } from "@/interfaces/Cafe";
import Image from "next/image";

interface ReviewInfoProps {
  moreButton?: boolean;
  cafeReviewInfo: ReviewType[];
}

const ReviewInfo = ({ moreButton, cafeReviewInfo }: ReviewInfoProps) => {
  const { showMore, handleClickMoreButton } = useMoreData();

  const visibleReviewData =
    !showMore && moreButton ? cafeReviewInfo.slice(0, 2) : cafeReviewInfo;

  return (
    <div className="h-full flex flex-col gap-4 border-b-[1px] border-solid border-gray-200 px-4 py-6 bg-white">
      {cafeReviewInfo.length === 0 ? (
        <div className="h-full flex flex-col justify-center items-center">
          <Icon type="review" size="xLarge" alt="camera" />
          <Text size="small" weight="bold" className="text-gray-600">
            아직 등록된 리뷰가 없어요
          </Text>
        </div>
      ) : (
        visibleReviewData.map((review: ReviewType) => {
          return (
            <article key={review.id}>
              <header className="flex justify-between">
                {/* TODO: // 작성자 정보, 별점, 등록날짜 */}
                <div className="flex gap-3">
                  <Image
                    src={"/assets/Images/profile.png"}
                    width={44}
                    height={44}
                    alt="profile image"
                  />
                  <div className="flex flex-col gap-[6px]">
                    <Text size="small">춘식이</Text>
                    <div className="flex">
                      <Star starSize="xSmall" starScore={5.0} />
                    </div>
                  </div>
                </div>
                <Text size="extraSmall" className="text-gray-700">
                  2024.03.12
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
                  <div className="text-gray-800 mb-[3px]">|</div>
                  <div className="flex gap-1.5"></div>
                  {review.keywords.slice(0, 2).map((keyword) => {
                    return (
                      <button
                        key={keyword.id}
                        className="h-[31px] px-3 rounded-3xl border-[1px] border-solid border-silver"
                      >
                        <Text size="small">{keyword.name}</Text>
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })
      )}
      {moreButton && cafeReviewInfo.length >= 3 && !showMore && (
        <div className="w-[calc(100%)] h-[1px] relative bg-gray-200 mt-[33px] mb-[38px]">
          <MoreButton
            text={"리뷰 더보기"}
            handleClickMoreButton={handleClickMoreButton}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewInfo;
