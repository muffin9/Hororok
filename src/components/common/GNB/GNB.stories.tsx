import type { Meta } from "@storybook/react";
import GNB from ".";

const meta: Meta<typeof GNB> = {
  title: "Common/GNB",
  component: GNB,
};

export default meta;

const PrimitiveGNB = () => {
  return <GNB />;
};

export const Default = {
  render: () => <PrimitiveGNB />,
};
