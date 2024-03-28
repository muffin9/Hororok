import type { Meta } from "@storybook/react";
import PlanSection from ".";

const meta: Meta<typeof PlanSection> = {
  title: "Section/PlanSection",
  component: PlanSection,
};

export default meta;

const PrimitivePlanSection = () => {
  return <PlanSection planId="1" />;
};

export const Default = {
  render: () => <PrimitivePlanSection />,
};
