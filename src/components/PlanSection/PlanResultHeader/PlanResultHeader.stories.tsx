import type { Meta } from "@storybook/react";
import PlanResultHeader from ".";

const meta: Meta<typeof PlanResultHeader> = {
  title: "Section/PlanResultHeader",
  component: PlanResultHeader,
};

export default meta;

const PrimitivePlanResultHeader = () => {
  return <PlanResultHeader />;
};

export const Default = {
  render: () => <PrimitivePlanResultHeader />,
};
