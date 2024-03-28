import type { Meta } from "@storybook/react";
import Step3 from ".";

const meta: Meta<typeof Step3> = {
  title: "Section/Step3",
  component: Step3,
};

export default meta;

const PrimitiveStep3 = () => {
  return <Step3 />;
};

export const Default = {
  render: () => <PrimitiveStep3 />,
};
