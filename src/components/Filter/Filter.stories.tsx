import type { Meta } from "@storybook/react";
import Filter from ".";

const meta: Meta<typeof Filter> = {
  title: "Search/Filter",
  component: Filter,
};

export default meta;

const PrimitiveFilter = () => {
  return <Filter onCloseButton={() => console.log("closed filter section")} />;
};

export const Default = {
  render: () => <PrimitiveFilter />,
};
