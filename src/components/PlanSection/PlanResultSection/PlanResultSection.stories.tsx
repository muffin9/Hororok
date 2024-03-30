import type { Meta } from "@storybook/react";
import PlanResultSection from ".";

const meta: Meta<typeof PlanResultSection> = {
  title: "Section/PlanResultSection",
  component: PlanResultSection,
};

export default meta;

const PrimitivePlanResultSection = () => {
  return <PlanResultSection />;
};

export const Default = {
  render: () => <PrimitivePlanResultSection />,
};
