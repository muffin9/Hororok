import type { Meta } from "@storybook/react";
import CombinationEdit from ".";

const meta: Meta<typeof CombinationEdit> = {
  title: "Section/CombinationEdit",
  component: CombinationEdit,
};

export default meta;

const PrimitiveCombinationEdit = () => {
  return <CombinationEdit />;
};

export const Default = {
  render: () => <PrimitiveCombinationEdit />,
};
