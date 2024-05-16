import type { Meta } from "@storybook/react";
import OnBoarding from ".";

const meta: Meta<typeof OnBoarding> = {
  title: "OnBoarding",
  component: OnBoarding,
};

export default meta;

const PrimitiveOnBoarding = () => {
  return <OnBoarding />;
};

export const Default = {
  render: () => <PrimitiveOnBoarding />,
};
