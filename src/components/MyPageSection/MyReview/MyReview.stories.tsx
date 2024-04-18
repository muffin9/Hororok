import type { Meta } from "@storybook/react";
import MyReview from ".";

const meta: Meta<typeof MyReview> = {
  title: "Section/MyReview",
  component: MyReview,
};

export default meta;

const PrimitiveMyReview = () => {
  return <MyReview />;
};

export const Default = {
  render: () => <PrimitiveMyReview />,
};
