import type { Meta } from "@storybook/react";
import TimeSelection from ".";

const meta: Meta<typeof TimeSelection> = {
  title: "Section/TimeSelection",
  component: TimeSelection,
};

export default meta;

const PrimitiveTimeSelection = () => {
  return (
    <TimeSelection
      handleItemClick={() => console.log("item clicked")}
      isIncludeTimeId={() => true}
    />
  );
};

export const Default = {
  render: () => <PrimitiveTimeSelection />,
};
