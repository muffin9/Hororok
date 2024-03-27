import type { Meta } from "@storybook/react";
import ContentInfo from ".";

const meta: Meta<typeof ContentInfo> = {
  title: "ContentInfo/Default",
  component: ContentInfo,
};

export default meta;

const PrimitiveContentInfo = () => {
  return <ContentInfo />;
};

export const Default = {
  render: () => <PrimitiveContentInfo />,
};
