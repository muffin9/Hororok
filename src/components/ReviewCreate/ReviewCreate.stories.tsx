import type { Meta } from "@storybook/react";
import ReviewCreate from ".";

const meta: Meta<typeof ReviewCreate> = {
  title: "Section/ReviewCreate",
  component: ReviewCreate,
};

export default meta;

const PrimitiveReviewCreate = () => {
  return <ReviewCreate cafeId={"2"} cafeName="잔다리 카페" />;
};

export const Default = {
  render: () => <PrimitiveReviewCreate />,
};
