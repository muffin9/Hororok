import useCategoryKeywordStore, {
  CategoryKeywordsType,
} from "@/store/useCategoryKeywordStore";
import { useState } from "react";

const initKeywords = {
  purpose: [],
  facility: [],
  atmosphere: [],
  menu: [],
  theme: [],
};

const useKeyword = () => {
  const [selectedItems, setSelectedItems] =
    useState<CategoryKeywordsType>(initKeywords);

  const { setCategoryKeywords } = useCategoryKeywordStore();

  const handleItemClick = (category: string, name: string) => {
    const totalSelectedItems = Object.values(selectedItems).reduce(
      (total, categoryArray) => {
        return total + categoryArray.length;
      },
      0
    );

    if (totalSelectedItems === 5 && !selectedItems[category].includes(name)) {
      return;
    }

    const updatedItems = { ...selectedItems };

    if (updatedItems[category]) {
      // 이미 해당 카테고리가 선택된 상태이면
      if (updatedItems[category].includes(name)) {
        // 선택된 키워드가 이미 존재하면 해당 키워드를 제거
        updatedItems[category] = updatedItems[category].filter(
          (item) => item !== name
        );
      } else {
        // 선택된 키워드가 존재하지 않으면 추가
        updatedItems[category] = [...updatedItems[category], name];
      }
    } else {
      // 해당 카테고리가 처음 선택되는 경우
      updatedItems[category] = [name];
    }

    setSelectedItems(updatedItems);
    setCategoryKeywords(updatedItems);
  };

  const checkSelected = (category: string, name: string) => {
    return selectedItems[category].includes(name);
  };

  const onClickRefresh = () => {
    setSelectedItems(initKeywords);
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

    return !selectedItems.purpose.some((item) => targetValues.includes(item));
  };

  return {
    selectedItems,
    setSelectedItems,
    handleItemClick,
    checkSelected,
    onClickRefresh,
    checkDisabledSubmit,
  };
};

export default useKeyword;