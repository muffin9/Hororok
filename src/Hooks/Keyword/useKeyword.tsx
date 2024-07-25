import useCategoryKeywordStore from "@/store/useCategoryKeywordStore";
import { CategoryKeywordsType } from "@/interfaces/Cafe";
import { useState } from "react";
import { popularKeywords } from "@/app/constants";

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
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = { ...prevSelectedItems };

      if (updatedItems[category]) {
        if (updatedItems[category].includes(name)) {
          updatedItems[category] = updatedItems[category].filter(
            (item) => item !== name
          );
        } else {
          updatedItems[category] = [...updatedItems[category], name];
        }
      } else {
        updatedItems[category] = [name];
      }

      setCategoryKeywords(updatedItems);
      return updatedItems;
    });
  };

  const handlePopularItemClick = (
    popularKeywords: { category: string; name: string }[]
  ) => {
    popularKeywords.forEach((keyword) => {
      setSelectedItems((prevSelectedItems) => {
        const updatedItems = { ...prevSelectedItems };

        if (updatedItems[keyword.category]) {
          if (updatedItems[keyword.category].includes(keyword.name)) {
            updatedItems[keyword.category] = updatedItems[
              keyword.category
            ].filter((item) => item !== keyword.name);
          } else {
            updatedItems[keyword.category] = [
              ...updatedItems[keyword.category],
              keyword.name,
            ];
          }
        } else {
          updatedItems[keyword.category] = [keyword.name];
        }

        setCategoryKeywords(updatedItems);
        return updatedItems;
      });
    });
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
    const targetValues = ["데이트/모임", "노트북작업", "독서/휴식"];

    return !selectedItems.purpose.some((item) => targetValues.includes(item));
  };

  const calculatedPopularKeywordIds = () => {
    const matchedIds = popularKeywords
      .filter(({ keywords }) =>
        keywords.every(({ category, name }) =>
          selectedItems[category]?.includes(name)
        )
      )
      .map(({ id }) => id);

    return matchedIds;
  };

  return {
    selectedItems,
    setSelectedItems,
    handleReviewItemClick,
    handlePopularItemClick,
    handleItemClick,
    checkSelected,
    onClickRefresh,
    checkKeywordDisabledSubmit,
    calculatedPopularKeywordIds,
  };
};

export default useKeyword;
