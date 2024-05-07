import type { Meta } from "@storybook/react";
import FilterSection from ".";
import { useState } from "react";

const meta: Meta<typeof FilterSection> = {
  title: "Section/FilterSection",
  component: FilterSection,
};

export default meta;

const PrimitiveFilterSection = () => {
  const [isFilter, setIsFilter] = useState(false);
  return <FilterSection setIsFilter={setIsFilter} />;
};

export const Default = {
  render: () => <PrimitiveFilterSection />,
};
