import type { Meta } from "@storybook/react";
import Step2 from ".";

const meta: Meta<typeof Step2> = {
  title: "MyPageSection/Secession/Step2",
  component: Step2,
};

export default meta;

const PrimitiveStep2 = () => {
  return <Step2 />;
};

export const Default = {
  render: () => <PrimitiveStep2 />,
};
