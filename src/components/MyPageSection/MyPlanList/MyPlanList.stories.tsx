import type { Meta } from "@storybook/react";
import MyPlanList from ".";

const meta: Meta<typeof MyPlanList> = {
  title: "Section/MyPlanList",
  component: MyPlanList,
};

export default meta;

const PrimitiveMyPlanList = () => {
  return <MyPlanList />;
};

export const Default = {
  render: () => <PrimitiveMyPlanList />,
};
