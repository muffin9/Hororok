import type { Meta } from "@storybook/react";
import HomeSection from ".";

const meta: Meta<typeof HomeSection> = {
  title: "Search/HomeSection",
  component: HomeSection,
};

export default meta;

const PrimitiveHomeSection = () => {
  return <HomeSection />;
};

export const Default = {
  render: () => <PrimitiveHomeSection />,
};
