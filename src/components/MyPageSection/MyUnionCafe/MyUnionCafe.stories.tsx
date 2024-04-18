import type { Meta } from "@storybook/react";
import MyUnionCafe from ".";

const meta: Meta<typeof MyUnionCafe> = {
  title: "Section/MyUnionCafe",
  component: MyUnionCafe,
};

export default meta;

const PrimitiveMyUnionCafe = () => {
  return <MyUnionCafe />;
};

export const Default = {
  render: () => <PrimitiveMyUnionCafe />,
};
