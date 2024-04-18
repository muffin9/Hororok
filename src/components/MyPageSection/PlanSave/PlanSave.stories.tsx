import type { Meta } from "@storybook/react";
import PlanSave from ".";

const meta: Meta<typeof PlanSave> = {
  title: "Section/PlanSave",
  component: PlanSave,
};

export default meta;

const PrimitivePlanSave = () => {
  return <PlanSave />;
};

export const Default = {
  render: () => <PrimitivePlanSave />,
};
