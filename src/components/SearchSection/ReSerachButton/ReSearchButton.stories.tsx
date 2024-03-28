import type { Meta } from "@storybook/react";
import ReSearchButton from ".";

const meta: Meta<typeof ReSearchButton> = {
  title: "Search/ReSearchButton",
  component: ReSearchButton,
};

export default meta;

const PrimitiveReSearchButton = () => {
  return <ReSearchButton />;
};

export const Default = {
  render: () => <PrimitiveReSearchButton />,
};
