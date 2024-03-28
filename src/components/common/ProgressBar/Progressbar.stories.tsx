import type { Meta } from "@storybook/react";
import ProgressBar from ".";

const meta: Meta<typeof ProgressBar> = {
  title: "Common/ProgressBar",
  component: ProgressBar,
};

export default meta;

const PrimitiveProgressBar = () => {
  return <ProgressBar currentStep={"1"} bgColor={"primary-300"} />;
};

export const Default = {
  render: () => <PrimitiveProgressBar />,
};
