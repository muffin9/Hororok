import type { Meta } from "@storybook/react";
import FilterSection from ".";

const meta: Meta<typeof FilterSection> = {
  title: "Section/FilterSection",
  component: FilterSection,
};

export default meta;

const PrimitiveFilterSection = () => {
  return <FilterSection />;
};

export const Default = {
  render: () => <PrimitiveFilterSection />,
};
