import type { Meta } from "@storybook/react";
import ContentInfo from ".";
import { fakeCafeDetailInfo } from "@/app/mockData";

const meta: Meta<typeof ContentInfo> = {
  title: "ContentInfo/Default",
  component: ContentInfo,
};

export default meta;

const PrimitiveContentInfo = () => {
  return <ContentInfo cafeDetailInfo={fakeCafeDetailInfo} />;
};

export const Default = {
  render: () => <PrimitiveContentInfo />,
};
