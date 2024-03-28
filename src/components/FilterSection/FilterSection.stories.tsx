import type { Meta } from "@storybook/react";
import FilterSection from ".";

const meta: Meta<typeof FilterSection> = {
  title: "Section/FilterSection",
  component: FilterSection,
};

export default meta;

const PrimitiveFilterSection = () => {
  return (
    <FilterSection
      categoryId="purpose"
      onCloseButton={() => console.log("closed FilterSection section")}
    />
  );
};

export const Default = {
  render: () => <PrimitiveFilterSection />,
};
