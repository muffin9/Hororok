import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import Star from "@/components/common/Star";
import Text from "@/components/common/Text";
import { CafeKeyWordType } from "@/interfaces/Cafe";

const MyReview = () => {
  const myReview = [
    {
      id: 1,
      content: "이 카페는 이런점이 좋았어요 이 카페는 이런점이 좋았어요",
      specialNote: "콘센트가 없는 자리가 많아요",
      images: [{ id: 1, imageUrl: "/assets/Images/profile.png" }],
      keywords: [{ id: 1, name: "키워드추천", count: 1 }],
      starRating: 5,
      cafeName: "스타벅스",
      createdDate: "2024.03.12",
    },
    {
      id: 2,
      content: "이 카페는 이런점이 좋았어요 이 카페는 이런점이 좋았어요",
      specialNote: "콘센트가 없는 자리가 많아요",
      images: [{ id: 1, imageUrl: "/assets/Images/profile.png" }],
      keywords: [{ id: 1, name: "키워드추천", count: 1 }],
      starRating: 4,
      cafeName: "투썸",
      createdDate: "2024.04.28",
    },
    {
      id: 3,
      content: "이 카페는 이런점이 좋았어요 이 카페는 이런점이 좋았어요",
      specialNote: "콘센트가 없는 자리가 많아요",
      images: [{ id: 1, imageUrl: "/assets/Images/profile.png" }],
      keywords: [{ id: 1, name: "키워드추천", count: 1 }],
      starRating: 4,
      cafeName: "할리스",
      createdDate: "2024.04.29",
    },
  ];

  return (
    <section className="h-screen overflow-y-scroll">
      {!myReview ? (
        <div className="h-full flex flex-col justify-center items-center">
          <Icon type="review" size="xLarge" alt="review" />
          <Text size="small" weight="bold" className="text-gray-600">
            첫 리뷰를 남겨주세요
          </Text>
        </div>
      ) : (
        myReview.map((myReview: any) => {
          return (
            <article
              key={myReview.id}
              className="px-4 py-6 border-gray-200 border-b-[1px] pb-6"
            >
              <header className="flex flex-col">
                <div className="w-full flex items-center justify-between">
                  <Text size="small">{myReview.cafeName}</Text>
                  <div className="flex gap-2">
                    <Button size="small">수정</Button>
                    <Button size="small" bgColor="bg-gray-400">
                      삭제
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2 items-center mt-4">
                  <Star starSize="xSmall" starScore={myReview.starRating} />
                  <Text size="extraSmall" className="text-gray-700">
                    {myReview.createdDate}
                  </Text>
                </div>
              </header>
              <div className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-4 mt-7">
                  <div className="flex items-center gap-3">
                    <Icon size="small" type="review" alt="myReview" />
                    <Text size="small">{myReview.content}</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon size="small" type="star" alt="star" />
                    <Text size="small">{myReview.specialNote}</Text>
                  </div>
                </div>
                <div className="flex gap-1.5 overflow-scroll">
                  {myReview.images.map(
                    (image: { id: number; imageUrl: string }) => {
                      return (
                        <div
                          key={image.id}
                          style={{
                            backgroundImage: `url(http:${image.imageUrl})`,
                          }}
                          className="w-[100px] h-[100px] rounded-lg"
                        />
                      );
                    }
                  )}
                </div>
                <div className="flex items-center gap-[6px]">
                  <Text size="small" className="text-gray-800">
                    추천메뉴
                  </Text>
                  <div className="text-gray-800 mb-[-1px]">|</div>
                  <div className="flex gap-1.5"></div>
                  {myReview.keywords
                    .slice(0, 2)
                    .map((keyword: CafeKeyWordType) => {
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
    </section>
  );
};

export default MyReview;
