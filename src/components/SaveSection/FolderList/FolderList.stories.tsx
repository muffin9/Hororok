import type { Meta } from "@storybook/react";
import FolderList from ".";

const meta: Meta<typeof FolderList> = {
  title: "Section/FolderList",
  component: FolderList,
};

export default meta;

const PrimitiveFolderList = () => {
  return <FolderList />;
};

export const Default = {
  render: () => <PrimitiveFolderList />,
};
