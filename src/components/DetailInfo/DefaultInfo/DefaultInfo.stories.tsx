import type { Meta } from "@storybook/react";
import DetaiInfo from ".";
import { faceCafeDefaultInfo } from "@/app/mockData";

const meta: Meta<typeof DetaiInfo> = {
  title: "DetaiInfo/Default",
  component: DetaiInfo,
};

export default meta;

const PrimitiveDetaiInfo = () => {
  return <DetaiInfo cafeDefaultInfo={faceCafeDefaultInfo} />;
};

export const Default = {
  render: () => <PrimitiveDetaiInfo />,
};
