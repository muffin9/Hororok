import type { Meta } from "@storybook/react";
import CombinationSection from ".";

const meta: Meta<typeof CombinationSection> = {
  title: "Section/CombinationSection",
  component: CombinationSection,
};

export default meta;

const PrimitiveCombinationSection = () => {
  return <CombinationSection />;
};

export const Default = {
  render: () => <PrimitiveCombinationSection />,
};
