import type { Meta } from "@storybook/react";
import TimeSelector from ".";

const meta: Meta<typeof TimeSelector> = {
  title: "Section/TimeSelector",
  component: TimeSelector,
};

export default meta;

const PrimitiveTimeSelector = () => {
  return <TimeSelector />;
};

export const Default = {
  render: () => <PrimitiveTimeSelector />,
};
