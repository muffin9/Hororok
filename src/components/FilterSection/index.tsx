import Text from "@/components/common/Text";
import Icon from "@/components/common/Icon";
import SubmitButton from "./SubmitButton";
import Button from "@/components/common/Button";
import Condition from "@/components/Condition";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useOutsideClick from "@/Hooks/useOutsideClick";
import useGeolocation from "@/Hooks/useGeolocation";
import { getSearchListByKeywords } from "@/apis/search";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";

interface FilterSectionProps {
  onCloseButton: () => void;
  categoryId: "목적" | "시설" | "분위기" | "메뉴" | "테마";
}

const FilterSection = ({ categoryId, onCloseButton }: FilterSectionProps) => {
  const router = useRouter();
  const filterRef = useRef<HTMLDivElement>(null);
  const location = useGeolocation();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { setSearchResultList } = useSearcResultListStorehPlace();

  const handleItemClick = (category: string) => {
    if (selectedItems.length === 5 && !selectedItems.includes(category)) {
      return;
    }

    if (selectedItems.includes(category)) {
      setSelectedItems(selectedItems.filter((item) => item !== category));
    } else {
      setSelectedItems([...selectedItems, category]);
    }
  };

  const checkSelected = (clickedCategory: string) => {
    return selectedItems.includes(clickedCategory);
  };

  const onClickRefresh = () => {
    setSelectedItems([]);
  };

  const checkDisabledSubmit = () => {
    const targetValues = [
      "개인작업/노트북",
      "데이트",
      "단체회식",
      "애견동반",
      "가족모임",
      "비즈니스미팅",
      "기념일",
      "친목/나들이",
    ];

    return !selectedItems.some((item) => targetValues.includes(item));
  };

  const onSubmit = async () => {
    const cafeSearchList = await getSearchListByKeywords(
      location.latitude,
      location.longitude,
      selectedItems
    );

    setSearchResultList(cafeSearchList);

    const path = `/search_map?latitude=${location.latitude}&longitude=${location.longitude}`;
    router.push(path);
    onCloseButton();
  };

  useOutsideClick(filterRef, onCloseButton);

  return (
    <section
      ref={filterRef}
      className="w-[390px] h-1/2 z-[1000] bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl boxShadow-xl overflow-scroll"
    >
      {/* <header>
        <div className="flex justify-between px-4 my-6">
          <Text size="large" weight="medium" className="text-black">
            카페 필터
          </Text>
          <button onClick={onCloseButton}>
            <Icon type="close" alt="close" />
          </button>
        </div>
      </header> */}
      <div className="px-4">
        <Condition
          categoryId={categoryId}
          handleItemClick={handleItemClick}
          checkSelected={checkSelected}
        />
      </div>
      <div className="flex h-[50px]">
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
          isDisabled={checkDisabledSubmit}
        />
      </div>
    </section>
  );
};

export default FilterSection;
