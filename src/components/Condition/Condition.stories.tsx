import type { Meta } from "@storybook/react";
import Condition from ".";

const meta: Meta<typeof Condition> = {
  title: "Search/Condition",
  component: Condition,
};

export default meta;

const PrimitiveCondition = () => {
  const handleItemClick = (clickedCategory: string) => {
    console.log(`${clickedCategory}~~`);
  };

  const checkSelected = (clickedCategory: string) => {
    return true;
  };

  return (
    <Condition
      handleItemClick={handleItemClick}
      checkSelected={checkSelected}
    />
  );
};

export const Default = {
  render: () => <PrimitiveCondition />,
};
