import type { Meta } from "@storybook/react";
import SaveInfoBox from ".";

const meta: Meta<typeof SaveInfoBox> = {
  title: "Section/SaveInfoBox",
  component: SaveInfoBox,
};

export default meta;

const PrimitiveSaveInfoBox = () => {
  return <SaveInfoBox />;
};

export const Default = {
  render: () => <PrimitiveSaveInfoBox />,
};
