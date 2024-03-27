import type { Meta } from "@storybook/react";
import DetailInfo from ".";

const meta: Meta<typeof DetailInfo> = {
  title: "Section/DetailInfo",
  component: DetailInfo,
};

export default meta;

const PrimitiveDetailInfo = () => {
  return <DetailInfo />;
};

export const Default = {
  render: () => <PrimitiveDetailInfo />,
};
