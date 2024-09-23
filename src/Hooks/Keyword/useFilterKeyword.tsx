import { CategoryKeywordsType } from "@/interfaces/Cafe";
import useCategoryFilterKeywordStore from "@/store/useCategoryFilterKeywordStore";
import { useState } from "react";
import { popularKeywords } from "@/app/constants";
import useToastStore from "@/store/useToastStore";

const initKeywords = {
  purpose: [],
  facility: [],
  atmosphere: [],
  menu: [],
  theme: [],
};

const useFilterKeyword = () => {
  const { categoryFilterKeywords } = useCategoryFilterKeywordStore();
  const { showMessage } = useToastStore();

  const [selectedItems, setSelectedItems] = useState<CategoryKeywordsType>(
    categoryFilterKeywords,
  );

  const { setCategoryFilterKeywords } = useCategoryFilterKeywordStore();

  // 최신 상태를 기반으로 업데이트하므로, 여러 번의 상태 업데이트가 누락되지 않고 모두 반영
  const updatedKeywords = (category: string, name: string) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = { ...prevSelectedItems };

      if (updatedItems[category]) {
        if (updatedItems[category].includes(name)) {
          updatedItems[category] = updatedItems[category].filter(
            (item) => item !== name,
          );
        } else {
          updatedItems[category] = [...updatedItems[category], name];
        }
      } else {
        updatedItems[category] = [name];
      }

      setCategoryFilterKeywords(updatedItems);
      return updatedItems;
    });
  };

  const handlePopularItemClick = (
    paramPopularKeywords: { category: string; name: string }[],
  ) => {
    const extractedNames = paramPopularKeywords.map(
      (keywords) => keywords.name,
    );

    const popularCount = Object.values(selectedItems).reduce((acc, array) => {
      if (array.includes(extractedNames[0])) acc += 1;
      if (array.includes(extractedNames[1])) acc += 1;
      return acc;
    }, 0);

    paramPopularKeywords.forEach((keyword) => {
      setSelectedItems((prevSelectedItems) => {
        const updatedItems = { ...prevSelectedItems };

        if (updatedItems[keyword.category]) {
          if (updatedItems[keyword.category].includes(keyword.name)) {
            if (popularCount === 2) {
              updatedItems[keyword.category] = updatedItems[
                keyword.category
              ].filter((item) => item !== keyword.name);
            }
          } else {
            updatedItems[keyword.category] = [
              ...updatedItems[keyword.category],
              keyword.name,
            ];
          }
        } else {
          updatedItems[keyword.category] = [keyword.name];
        }

        const totalElementsLen = Object.keys(updatedItems).reduce(
          (sum, key) => {
            return sum + updatedItems[key].length;
          },
          0,
        );

        if (totalElementsLen > 5) {
          showMessage("키워드는 5개이상 선택할 수 없어요.");
          return prevSelectedItems;
        } else {
          setCategoryFilterKeywords(updatedItems);
          return updatedItems;
        }
      });
    });
  };

  const handleItemClick = (category: string, name: string) => {
    const totalSelectedItems = Object.values(selectedItems).reduce(
      (total, categoryArray) => {
        return total + categoryArray.length;
      },
      0,
    );

    if (totalSelectedItems >= 5 && !selectedItems[category].includes(name)) {
      showMessage("키워드는 5개이상 선택할 수 없어요.");
      return;
    }

    updatedKeywords(category, name);
  };

  const handleReviewItemClick = (category: string, name: string) => {
    const totalSelectedItems = Object.values(selectedItems).reduce(
      (total, categoryArray) => {
        return total + categoryArray.length;
      },
      0,
    );

    if (totalSelectedItems === 10 && !selectedItems[category].includes(name)) {
      showMessage("키워드는 10개이상 선택할 수 없어요.");
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
    setCategoryFilterKeywords(initKeywords);
  };

  const checkKeywordDisabledSubmit = () => {
    const targetValues = ["데이트/모임", "노트북작업", "독서/휴식"];

    return !selectedItems.purpose.some((item) => targetValues.includes(item));
  };

  const calculatedPopularKeywordIds = () => {
    const matchedIds = popularKeywords
      .filter(({ keywords }) =>
        keywords.every(({ category, name }) =>
          selectedItems[category]?.includes(name),
        ),
      )
      .map(({ id }) => id);

    return matchedIds;
  };

  return {
    selectedItems,
    setSelectedItems,
    handlePopularItemClick,
    handleReviewItemClick,
    handleItemClick,
    checkSelected,
    onClickRefresh,
    checkKeywordDisabledSubmit,
    calculatedPopularKeywordIds,
  };
};

export default useFilterKeyword;
