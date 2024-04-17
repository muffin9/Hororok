import type { Meta } from "@storybook/react";
import SaveCreateEdit from ".";

const meta: Meta<typeof SaveCreateEdit> = {
  title: "Section/SaveCreateEdit",
  component: SaveCreateEdit,
};

export default meta;

const PrimitiveSaveCreateEdit = () => {
  return <SaveCreateEdit />;
};

export const Default = {
  render: () => <PrimitiveSaveCreateEdit />,
};
