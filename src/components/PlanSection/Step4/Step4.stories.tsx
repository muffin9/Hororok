import type { Meta } from "@storybook/react";
import Step4 from ".";

const meta: Meta<typeof Step4> = {
  title: "Section/Step4",
  component: Step4,
};

export default meta;

const PrimitiveStep4 = () => {
  return <Step4 />;
};

export const Default = {
  render: () => <PrimitiveStep4 />,
};
