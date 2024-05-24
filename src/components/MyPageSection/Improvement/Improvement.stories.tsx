import type { Meta } from "@storybook/react";
import Improvement from ".";

const meta: Meta<typeof Improvement> = {
  title: "MyPageSection/Improvement",
  component: Improvement,
};

export default meta;

const PrimitiveImprovement = () => {
  return <Improvement />;
};

export const Default = {
  render: () => <PrimitiveImprovement />,
};
