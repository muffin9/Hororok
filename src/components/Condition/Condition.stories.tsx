import type { Meta } from "@storybook/react";
import Condition from ".";
import { filterDatas } from "@/app/constants";

const meta: Meta<typeof Condition> = {
  title: "Search/Condition",
  component: Condition,
};

export default meta;

const PrimitiveCondition = () => {
  const handlePopularItemClick = () => {};

  const handleItemClick = (clickedCategory: string) => {
    console.log(`${clickedCategory}~~`);
  };

  const checkSelected = (clickedCategory: string) => {
    return true;
  };

  return (
    <Condition
      handlePopularItemClick={handlePopularItemClick}
      handleItemClick={handleItemClick}
      checkSelected={checkSelected}
      filterDatas={filterDatas}
      maxSelectCount={5}
    />
  );
};

export const Default = {
  render: () => <PrimitiveCondition />,
};
