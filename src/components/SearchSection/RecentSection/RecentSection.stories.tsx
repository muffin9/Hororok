import type { Meta } from "@storybook/react";
import RecentSection from ".";

const meta: Meta<typeof RecentSection> = {
  title: "Search/RecentSection",
  component: RecentSection,
};

export default meta;

const PrimitiveRecentSection = () => {
  return <RecentSection />;
};

export const Default = {
  render: () => <PrimitiveRecentSection />,
};
