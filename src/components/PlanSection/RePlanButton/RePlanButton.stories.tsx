import type { Meta } from "@storybook/react";
import RePlanButton from ".";

const meta: Meta<typeof RePlanButton> = {
  title: "Section/RePlanButton",
  component: RePlanButton,
};

export default meta;

const PrimitiveRePlanButton = () => {
  return <RePlanButton />;
};

export const Default = {
  render: () => <PrimitiveRePlanButton />,
};
