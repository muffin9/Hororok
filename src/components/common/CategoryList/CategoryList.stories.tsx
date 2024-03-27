import type { Meta } from "@storybook/react";
import CategoryList from ".";

const meta: Meta<typeof CategoryList> = {
  title: "Common/CategoryList",
  component: CategoryList,
};

export default meta;

const PrimitiveCategoryList = () => {
  return <CategoryList />;
};

export const Default = {
  render: () => <PrimitiveCategoryList />,
};
