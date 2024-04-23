import type { Meta } from "@storybook/react";
import SaveInfoBox from ".";

const meta: Meta<typeof SaveInfoBox> = {
  title: "Section/SaveInfoBox",
  component: SaveInfoBox,
};

export default meta;

const PrimitiveSaveInfoBox = () => {
  return (
    <SaveInfoBox
      folderData={{
        folderId: 1,
        name: "test",
        color: "#FE8282",
        bookmarkCount: 9,
        visible: false,
        defaultFolder: false,
      }}
    />
  );
};

export const Default = {
  render: () => <PrimitiveSaveInfoBox />,
};
