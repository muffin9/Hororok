import { CategoryIdType } from "@/components/Home/HomeSection";
import { useState } from "react";

const useHandleFilterSection = () => {
  const [categoryId, setCategoryId] = useState<CategoryIdType>("목적");
  const [isFilter, setIsFilter] = useState(false);

  const onClickCategory = (id: CategoryIdType) => {
    setCategoryId(id);
    setIsFilter(true);
  };

  return { categoryId, isFilter, setIsFilter, onClickCategory };
};

export default useHandleFilterSection;
