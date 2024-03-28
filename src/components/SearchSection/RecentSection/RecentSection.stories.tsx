import type { Meta } from "@storybook/react";
import RecentSection from ".";

const meta: Meta<typeof RecentSection> = {
  title: "Search/RecentSection",
  component: RecentSection,
};

export default meta;

const PrimitiveRecentSection = () => {
  return (
    <RecentSection
      onClickRecentSearch={() => console.log("clicked recent Search")}
    />
  );
};

export const Default = {
  render: () => <PrimitiveRecentSection />,
};
