import type { Meta } from "@storybook/react";
import SearchResultSection from ".";

const meta: Meta<typeof SearchResultSection> = {
  title: "Search/SearchResultSection",
  component: SearchResultSection,
};

export default meta;

const PrimitiveSearchResultSection = () => {
  return <SearchResultSection />;
};

export const Default = {
  render: () => <PrimitiveSearchResultSection />,
};
