import type { Meta } from "@storybook/react";
import Tooltip from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Section/Tooltip",
  component: Tooltip,
};

export default meta;

const PrimitiveTooltip = () => {
  return <Tooltip />;
};

export const Default = {
  render: () => <PrimitiveTooltip />,
};
