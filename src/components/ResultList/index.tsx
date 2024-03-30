"use client";

import Image from "next/image";
import CategoryList from "@/components/common/CategoryList";
import { CafeInfoType } from "@/interfaces/Cafe";
import Text from "@/components/common/Text";
import Icon from "@/components/common/Icon";
import { useRef } from "react";
import FilterSection from "../FilterSection";
import { useRouter } from "next/navigation";
import useOutsideClick from "@/Hooks/useOutsideClick";
import useHandleFilterSection from "@/Hooks/useHandleFilterSection";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";

const ResultList = () => {
  const router = useRouter();
  const filterRef = useRef<HTMLDivElement>(null);
  const { categoryId, isFilter, setIsFilter, onClickCategory } =
    useHandleFilterSection();
  const { searchResultList } = useSearcResultListStorehPlace();

  useOutsideClick(filterRef, () => setIsFilter(false));

  return (
    <section
      ref={filterRef}
      className="w-[390px] h-1/2 z-[1000] px-4 pb-12 py-4 bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl boxShadow-xl overflow-x-hidden overflow-y-scroll"
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
            <FilterSection
              categoryId={categoryId}
              onCloseButton={() => setIsFilter(false)}
            />
          ) : (
            <CategoryList onClickCategory={onClickCategory} />
          )}
        </header>
        <div>
          {searchResultList.map((data: CafeInfoType) => {
            return (
              <div
                key={data.id}
                className="flex gap-3 mb-3 cursor-pointer"
                onClick={() => router.push(`/cafelist/${data.id}`)}
              >
                <Image
                  src={data.imageUrl || "/assets/Images/sample.jpeg"}
                  width={110}
                  height={110}
                  alt={"카페 이미지"}
                  className="rounded-lg"
                />
                <div className="w-full flex flex-col py-4 gap-3">
                  <header className="flex justify-between">
                    <Text size="large" className="text-black">
                      {data.name}
                    </Text>
                    <div className="flex gap-4">
                      <Icon type="share" size="small" alt="공유하기" />
                      <Icon type="bookmark" size="small" alt="북마크" />
                    </div>
                  </header>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center">
                      <Icon type="star" size="xSmall" alt="star" />
                      <Text size="small" className="text-black">
                        {data.starRating}
                      </Text>
                      <Text size="extraSmall" className="text-gray-700">
                        ({data.reviewCount})
                      </Text>
                    </div>
                    <Text size="extraSmall" className="text-gray-700">
                      {data.roadAddress}
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
