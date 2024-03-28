import type { Meta } from "@storybook/react";
import CategoryList from ".";
import { CategoryIdType } from "@/components/Home/HomeSection";
import { useState } from "react";

const meta: Meta<typeof CategoryList> = {
  title: "Common/CategoryList",
  component: CategoryList,
};

export default meta;

const PrimitiveCategoryList = () => {
  const [categoryId, setCategoryId] = useState<CategoryIdType>("purpose");

  const onClickCategory = (id: CategoryIdType) => {
    setCategoryId(id);
  };

  return <CategoryList onClickCategory={() => onClickCategory("purpose")} />;
};

export const Default = {
  render: () => <PrimitiveCategoryList />,
};
