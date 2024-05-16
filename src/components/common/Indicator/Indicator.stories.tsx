import type { Meta } from "@storybook/react";
import Indicator from ".";

const meta: Meta<typeof Indicator> = {
  title: "Section/Indicator",
  component: Indicator,
};

export default meta;

const PrimitiveIndicator = () => {
  return <Indicator count={4} currentIdx={0} />;
};

export const Default = {
  render: () => <PrimitiveIndicator />,
};
