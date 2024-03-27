import type { Meta } from "@storybook/react";
import DetaiInfo from ".";

const meta: Meta<typeof DetaiInfo> = {
  title: "DetaiInfo/Default",
  component: DetaiInfo,
};

export default meta;

const PrimitiveDetaiInfo = () => {
  return <DetaiInfo />;
};

export const Default = {
  render: () => <PrimitiveDetaiInfo />,
};
