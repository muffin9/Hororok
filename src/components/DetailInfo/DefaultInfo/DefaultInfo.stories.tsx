import type { Meta } from "@storybook/react";
import DetaiInfo from ".";

const meta: Meta<typeof DetaiInfo> = {
  title: "DetaiInfo/Default",
  component: DetaiInfo,
};

export default meta;

const PrimitiveDetaiInfo = () => {
  return <DetaiInfo cafeId="1" />;
};

export const Default = {
  render: () => <PrimitiveDetaiInfo />,
};
