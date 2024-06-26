import type { Meta } from "@storybook/react";
import FolderEdit from ".";

const meta: Meta<typeof FolderEdit> = {
  title: "Section/FolderEdit",
  component: FolderEdit,
};

export default meta;

const PrimitiveFolderEdit = () => {
  return <FolderEdit folderId={1} />;
};

export const Default = {
  render: () => <PrimitiveFolderEdit />,
};
