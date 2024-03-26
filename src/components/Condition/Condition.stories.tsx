import type { Meta } from "@storybook/react";
import Condition from ".";

const meta: Meta<typeof Condition> = {
  title: "Search/Condition",
  component: Condition,
};

export default meta;

const PrimitiveCondition = () => {
  return <Condition />;
};

export const Default = {
  render: () => <PrimitiveCondition />,
};
