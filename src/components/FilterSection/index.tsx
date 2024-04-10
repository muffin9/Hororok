import Text from "@/components/common/Text";
import Icon from "@/components/common/Icon";
import SubmitButton from "./SubmitButton";
import Button from "@/components/common/Button";
import Condition from "@/components/Condition";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useOutsideClick from "@/Hooks/useOutsideClick";
import { getSearchListByKeywords } from "@/apis/search";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";
import useGeolocation from "@/Hooks/useGeolocation";
import useKeyword from "@/Hooks/Keyword/useKeyword";
import useCategoryKeywordStore from "@/store/useCategoryKeywordStore";
import useHandleFilterSection from "@/Hooks/useHandleFilterSection";

const FilterSection = () => {
  const router = useRouter();
  const filterRef = useRef<HTMLDivElement>(null);

  const params = useSearchParams();
  const location = useGeolocation();

  const { categoryId, setIsFilter } = useHandleFilterSection();
  const { categoryKeywords } = useCategoryKeywordStore();
  const { setSearchResultList } = useSearcResultListStorehPlace();

  const {
    handleItemClick,
    checkSelected,
    onClickRefresh,
    checkKeywordDisabledSubmit,
  } = useKeyword();

  const onSubmit = async () => {
    let latitude = params.get("latitude") || location.latitude;
    let longitude = params.get("longitude") || location.longitude;

    const cafeSearchList = await getSearchListByKeywords(
      +latitude,
      +longitude,
      categoryKeywords
    );

    setSearchResultList(cafeSearchList);

    const path = `/search_map?latitude=${latitude}&longitude=${longitude}`;
    router.push(path);
    setIsFilter(false);
  };

  useOutsideClick(filterRef, () => setIsFilter(false));

  return (
    <section
      ref={filterRef}
      className="w-[390px] h-1/2 bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl shadow-xl overflow-scroll"
    >
      <div className="px-4">
        <Condition
          categoryId={categoryId}
          handleItemClick={handleItemClick}
          checkSelected={checkSelected}
        />
      </div>
      <div className="flex h-[50px] border-t-[1px] border-silver">
        <Button
          size="large"
          className="w-1/3 bg-white flex gap-[2px]"
          onClick={onClickRefresh}
        >
          <Icon size="small" type="refresh" alt="재설정" />
          <Text size="medium" className="text-black">
            재설정
          </Text>
        </Button>
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
