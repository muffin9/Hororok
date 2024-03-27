import type { Meta } from "@storybook/react";
import Star from ".";

const meta: Meta<typeof Star> = {
  title: "Common/Star",
  component: Star,
};

export default meta;

const PrimitiveStar = () => {
  return <Star starScore={"5.0"} />;
};

export const Default = {
  render: () => <PrimitiveStar />,
};
