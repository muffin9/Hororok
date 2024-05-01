import type { Meta } from "@storybook/react";
import ReviewInfo from ".";

const meta: Meta<typeof ReviewInfo> = {
  title: "Section/ReviewInfo",
  component: ReviewInfo,
};

export default meta;

const PrimitiveReviewInfo = () => {
  return <ReviewInfo cafeId="1" />;
};

export const Default = {
  render: () => <PrimitiveReviewInfo />,
};
