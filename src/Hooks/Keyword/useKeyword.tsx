import useCategoryKeywordStore from "@/store/useCategoryKeywordStore";
import { CategoryKeywordsType } from "@/interfaces/Cafe";
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

  const updatedKeywords = (category: string, name: string) => {
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

    updatedKeywords(category, name);
  };

  const handleReviewItemClick = (category: string, name: string) => {
    const totalSelectedItems = Object.values(selectedItems).reduce(
      (total, categoryArray) => {
        return total + categoryArray.length;
      },
      0
    );

    if (totalSelectedItems === 10 && !selectedItems[category].includes(name)) {
      return;
    }

    if (
      category === "menu" &&
      selectedItems.menu.length === 3 &&
      !selectedItems.menu.includes(name)
    )
      return;

    updatedKeywords(category, name);
  };

  const checkSelected = (category: string, name: string) => {
    return selectedItems[category].includes(name);
  };

  const onClickRefresh = () => {
    setSelectedItems(initKeywords);
  };

  const checkKeywordDisabledSubmit = () => {
    const targetValues = [
      "친목/모임",
      "데이트",
      "개인작업/노트북",
      "독서/휴식",
      "비즈니스미팅",
      "가족모임",
      "애견동반",
    ];

    return !selectedItems.purpose.some((item) => targetValues.includes(item));
  };

  return {
    selectedItems,
    setSelectedItems,
    handleReviewItemClick,
    handleItemClick,
    checkSelected,
    onClickRefresh,
    checkKeywordDisabledSubmit,
  };
};

export default useKeyword;
