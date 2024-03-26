import type { Meta } from "@storybook/react";
import Condition from ".";

const meta: Meta<typeof Condition> = {
  title: "Search/Condition",
  component: Condition,
};

export default meta;

const PrimitiveCondition = () => {
  const handleItemClick = (filterId: string, itemId: string) => {
    console.log(`Filter ID: ${filterId}, Item ID: ${itemId}`);
  };

  const checkSelected = (filterId: string, itemId: string) => {
    return filterId === itemId;
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
