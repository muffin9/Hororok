import type { Meta } from "@storybook/react";
import MyPageSection from ".";

const meta: Meta<typeof MyPageSection> = {
  title: "Section/MyPageSection",
  component: MyPageSection,
};

export default meta;

const PrimitiveMyPageSection = () => {
  return <MyPageSection />;
};

export const Default = {
  render: () => <PrimitiveMyPageSection />,
};
