"use client";

import CategoryList from "@/components/common/CategoryList";
import { useMemo, useRef } from "react";
import FilterSection from "../FilterSection";
import useOutsideClick from "@/Hooks/useOutsideClick";
import useHandleFilterSection from "@/Hooks/useHandleFilterSection";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";
import CardResultCafeInfo from "../CardResultCafeInfo";
import Icon from "../common/Icon";
import Text from "../common/Text";
import useCategoryKeywordStore from "@/store/useCategoryKeywordStore";

const ResultList = () => {
  const filterRef = useRef<HTMLDivElement>(null);
  const { isFilter, setIsFilter, onClickCategory } = useHandleFilterSection();
  const { searchResultList } = useSearcResultListStorehPlace();
  const { categoryKeywords } = useCategoryKeywordStore();

  useOutsideClick(filterRef, () => setIsFilter(false));

  const categoryKeywordLen = useMemo(() => {
    let totalCount = 0;

    Object.values(categoryKeywords).forEach((values) => {
      totalCount += values.length;
    });

    return totalCount;
  }, [categoryKeywords]);

  return (
    <section
      ref={filterRef}
      className="w-[390px] h-1/2 z-[1000] pb-12 py-4 bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl shadow-xl overflow-x-hidden overflow-y-scroll"
    >
      <div className="flex flex-col gap-6">
        <header className="w-screen flex items-center gap-[2px]">
          {isFilter ? (
            <FilterSection setIsFilter={setIsFilter} />
          ) : (
            <div className="w-full flex gap-[4px] px-4 overflow-x-scroll">
              {/* <button className="flex justify-center items-center gap-[2px] w-[50px] border-solid border-[1px] border-gray-400 rounded-lg">
                <Icon type="filter" alt="filter" />
                <Text size="extraSmall">{categoryKeywordLen}</Text>
              </button> */}
              <CategoryList onClickCategory={onClickCategory} />
            </div>
          )}
        </header>
        {searchResultList && (
          <CardResultCafeInfo cafeDatas={searchResultList} />
        )}
      </div>
    </section>
  );
};

export default ResultList;
