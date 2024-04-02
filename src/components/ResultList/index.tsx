"use client";

import CategoryList from "@/components/common/CategoryList";
import { useRef } from "react";
import FilterSection from "../FilterSection";
import useOutsideClick from "@/Hooks/useOutsideClick";
import useHandleFilterSection from "@/Hooks/useHandleFilterSection";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";
import CardResultCafeInfo from "../CardResultCafeInfo";

const ResultList = () => {
  const filterRef = useRef<HTMLDivElement>(null);
  const { categoryId, isFilter, setIsFilter, onClickCategory } =
    useHandleFilterSection();
  const { searchResultList } = useSearcResultListStorehPlace();

  useOutsideClick(filterRef, () => setIsFilter(false));

  return (
    <section
      ref={filterRef}
      className="w-[390px] h-1/2 z-[1000] pb-12 py-4 bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl boxShadow-xl overflow-x-hidden overflow-y-scroll"
    >
      <div className="flex flex-col gap-6">
        <header className="w-screen flex items-center gap-[2px]">
          {/* <button className="flex gap-1 w-[51px] h-[32px] items-center text-gray-800 text-sm rounded-lg border-solid border-[1px] border-gray-400 px-2">
            <Icon type="filter" size="small" alt="filter" />
            <Text size="small" className="text-black">
              0
            </Text>
          </button> */}
          {isFilter ? (
            <FilterSection
              categoryId={categoryId}
              onCloseButton={() => setIsFilter(false)}
            />
          ) : (
            <div className="px-4">
              <CategoryList onClickCategory={onClickCategory} />
            </div>
          )}
        </header>
        <div className="px-4">
          {searchResultList && (
            <CardResultCafeInfo cafeDatas={searchResultList} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ResultList;
