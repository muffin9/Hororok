import type { Meta } from "@storybook/react";
import FolderEdit from ".";

const meta: Meta<typeof FolderEdit> = {
  title: "Section/FolderEdit",
  component: FolderEdit,
};

export default meta;

const PrimitiveFolderEdit = () => {
  return (
    <FolderEdit
      folderList={{
        folderId: 1,
        folderName: "test",
        folderColor: "#FE8282",
        bookmarks: [],
      }}
    />
  );
};

export const Default = {
  render: () => <PrimitiveFolderEdit />,
};
