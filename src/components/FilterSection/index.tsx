import SubmitButton from "./SubmitButton";
import Condition from "@/components/Condition";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useOutsideClick from "@/Hooks/useOutsideClick";
import { getSearchListByKeywords } from "@/apis/search";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";
import useGeolocation from "@/Hooks/useGeolocation";
import useCategoryFilterKeywordStore from "@/store/useCategoryFilterKeywordStore";
import useHandleFilterSection from "@/Hooks/useHandleFilterSection";
import { filterDatas } from "@/app/constants";
import RefreshButton from "../common/RefreshButton";
import Icon from "../common/Icon";
import useFilterKeyword from "@/Hooks/Keyword/useFilterKeyword";

interface FilterSectionProps {
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterSection = ({ setIsFilter }: FilterSectionProps) => {
  const router = useRouter();
  const filterRef = useRef<HTMLDivElement>(null);

  const params = useSearchParams();
  const location = useGeolocation();

  const { categoryId } = useHandleFilterSection();
  const { setCategoryFilterKeywords } = useCategoryFilterKeywordStore();
  const { setSearchResultList } = useSearcResultListStorehPlace();

  const {
    selectedItems,
    handlePopularItemClick,
    handleItemClick,
    checkSelected,
    onClickRefresh,
    checkKeywordDisabledSubmit,
    calculatedPopularKeywordIds,
  } = useFilterKeyword();

  const onSubmit = async () => {
    let latitude = params.get("latitude") || location.latitude;
    let longitude = params.get("longitude") || location.longitude;

    const cafeSearchList = await getSearchListByKeywords(
      +latitude,
      +longitude,
      selectedItems
    );

    setSearchResultList(cafeSearchList);
    setCategoryFilterKeywords(selectedItems);

    const path = `/search_map?latitude=${latitude}&longitude=${longitude}`;
    router.push(path);
    setIsFilter(false);
  };

  useOutsideClick(filterRef, () => setIsFilter(false));

  return (
    <section
      ref={filterRef}
      className={`animate-slide-up w-[380px] h-1/2 bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl shadow-xl overflow-scroll`}
    >
      <div className="px-4">
        <button
          onClick={() => setIsFilter(false)}
          className="absolute top-4 right-4"
        >
          <Icon size="small" type="close" alt="close" />
        </button>
        <Condition
          categoryId={categoryId}
          handlePopularItemClick={handlePopularItemClick}
          handleItemClick={handleItemClick}
          checkSelected={checkSelected}
          calculatedPopularKeywordIds={calculatedPopularKeywordIds}
          filterDatas={filterDatas}
          maxSelectCount={5}
        />
      </div>
      <div className="sticky bottom-0 flex h-[50px] border-t-[1px] border-silver">
        <RefreshButton onClickRefresh={onClickRefresh} />
        <SubmitButton
          onSubmit={onSubmit}
          className="mr-4"
          isDisabled={checkKeywordDisabledSubmit}
        />
      </div>
    </section>
  );
};

export default FilterSection;
