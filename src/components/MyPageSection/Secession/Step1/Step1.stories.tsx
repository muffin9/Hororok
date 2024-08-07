import type { Meta } from "@storybook/react";
import Step1 from ".";

const meta: Meta<typeof Step1> = {
  title: "MyPageSection/Secession/Step1",
  component: Step1,
};

export default meta;

const PrimitiveStep1 = () => {
  return <Step1 setIsStep2={() => false} />;
};

export const Default = {
  render: () => <PrimitiveStep1 />,
};
