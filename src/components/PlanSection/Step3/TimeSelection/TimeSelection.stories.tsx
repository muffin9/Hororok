import type { Meta } from "@storybook/react";
import TimeSelection from ".";

const meta: Meta<typeof TimeSelection> = {
  title: "Section/TimeSelection",
  component: TimeSelection,
};

export default meta;

const PrimitiveTimeSelection = () => {
  return <TimeSelection />;
};

export const Default = {
  render: () => <PrimitiveTimeSelection />,
};
