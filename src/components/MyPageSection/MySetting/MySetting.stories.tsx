import type { Meta } from "@storybook/react";
import MySetting from ".";

const meta: Meta<typeof MySetting> = {
  title: "Section/MySetting",
  component: MySetting,
};

export default meta;

const PrimitiveMySetting = () => {
  return <MySetting />;
};

export const Default = {
  render: () => <PrimitiveMySetting />,
};
