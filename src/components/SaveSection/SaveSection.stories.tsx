import type { Meta } from "@storybook/react";
import SaveSection from ".";

const meta: Meta<typeof SaveSection> = {
  title: "Section/SaveSection",
  component: SaveSection,
};

export default meta;

const PrimitiveSaveSection = () => {
  return <SaveSection />;
};

export const Default = {
  render: () => <PrimitiveSaveSection />,
};
