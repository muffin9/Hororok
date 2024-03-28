import type { Meta } from "@storybook/react";
import ReviewCreate from ".";

const meta: Meta<typeof ReviewCreate> = {
  title: "Section/ReviewCreate",
  component: ReviewCreate,
};

export default meta;

const PrimitiveReviewCreate = () => {
  return <ReviewCreate />;
};

export const Default = {
  render: () => <PrimitiveReviewCreate />,
};