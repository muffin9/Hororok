import Image from "next/image";
import CategoryList from "@/components/common/CategoryList";
import { CafeInfoType } from "@/interfaces/Cafe";
import Text from "@/components/common/Text";
import Star from "@/components/common/Star";
import Icon from "@/components/common/Icon";
import { useRef, useState } from "react";
import FilterSection from "../FilterSection";
import { useRouter } from "next/navigation";
import useOutsideClick from "@/Hooks/useOutsideClick";

const ResultList = () => {
  const router = useRouter();
  const [isFilter, setIsFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const resultListDummyData = [
    {
      id: "cafe-1",
      imageUrl: "/assets/Images/sample.jpeg",
      title: "카페이름",
      starScore: "5.0",
      reviewCnt: 12,
      address: "서울 강남구 테헤란로",
    },
    {
      id: "cafe-2",
      imageUrl: "/assets/Images/sample.jpeg",
      title: "카페이름",
      starScore: "5.0",
      reviewCnt: 12,
      address: "서울 강남구 테헤란로",
    },
    {
      id: "cafe-3",
      imageUrl: "/assets/Images/sample.jpeg",
      title: "카페이름",
      starScore: "5.0",
      reviewCnt: 12,
      address: "서울 강남구 테헤란로",
    },
  ];

  useOutsideClick(filterRef, () => setIsFilter(false));

  return (
    <section
      ref={filterRef}
      className="w-[390px] h-1/2 z-[1000] pl-4 pb-12 py-4 bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl boxShadow-xl overflow-x-hidden overflow-y-scroll"
    >
      <div className="flex flex-col gap-6">
        <header className="w-screen flex items-center gap-[2px]">
          <button className="flex gap-1 w-[51px] h-[32px] items-center text-gray-800 text-sm rounded-lg border-solid border-[1px] border-gray-400 px-2">
            <Icon type="filter" size="small" alt="filter" />
            <Text size="small" className="text-black">
              0
            </Text>
          </button>
          {isFilter ? (
            <FilterSection onCloseButton={() => setIsFilter(false)} />
          ) : (
            <CategoryList onFilter={() => setIsFilter(true)} />
          )}
        </header>
        <div>
          {resultListDummyData.map((data: CafeInfoType) => {
            return (
              <div
                key={data.id}
                className="flex gap-3 mb-3 cursor-pointer"
                onClick={() => router.push(`/cafelist/${data.id}`)}
              >
                <Image
                  src={data.imageUrl}
                  width={110}
                  height={110}
                  alt={"카페 이미지"}
                  className="rounded-lg"
                />
                <div className="w-full flex flex-col py-4 gap-3">
                  <header className="flex justify-between">
                    <Text size="large" className="text-black">
                      {data.title}
                    </Text>
                    <div className="flex gap-4">
                      <Icon type="share" size="small" alt="공유하기" />
                      <Icon type="bookmark" size="small" alt="북마크" />
                    </div>
                  </header>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <Star starScore={data.starScore} />
                      <Text size="extraSmall" className="text-gray-700">
                        ({data.reviewCnt})
                      </Text>
                    </div>
                    <Text size="extraSmall" className="text-gray-700">
                      {data.address}
                    </Text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultList;
