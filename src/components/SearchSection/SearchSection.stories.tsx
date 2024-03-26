import type { Meta } from "@storybook/react";
import SearchSection from ".";

const meta: Meta<typeof SearchSection> = {
  title: "Search/SearchSection",
  component: SearchSection,
};

export default meta;

const PrimitiveSearchSection = () => {
  return <SearchSection />;
};

export const Default = {
  render: () => <PrimitiveSearchSection />,
};
