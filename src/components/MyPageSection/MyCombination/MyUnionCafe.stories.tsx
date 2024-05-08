import type { Meta } from "@storybook/react";
import MyCombination from ".";

const meta: Meta<typeof MyCombination> = {
  title: "Section/MyCombination",
  component: MyCombination,
};

export default meta;

const PrimitiveMyCombination = () => {
  return <MyCombination />;
};

export const Default = {
  render: () => <PrimitiveMyCombination />,
};
