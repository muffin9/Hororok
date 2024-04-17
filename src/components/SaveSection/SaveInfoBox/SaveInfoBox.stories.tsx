import type { Meta } from "@storybook/react";
import SaveInfoBox from ".";

const meta: Meta<typeof SaveInfoBox> = {
  title: "Section/SaveInfoBox",
  component: SaveInfoBox,
};

export default meta;

const PrimitiveSaveInfoBox = () => {
  return <SaveInfoBox saveData={{ id: 1, folderName: "test", count: 9 }} />;
};

export const Default = {
  render: () => <PrimitiveSaveInfoBox />,
};
