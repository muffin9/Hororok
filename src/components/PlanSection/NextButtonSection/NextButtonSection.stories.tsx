import type { Meta } from "@storybook/react";
import NextButtonSection from ".";

const meta: Meta<typeof NextButtonSection> = {
  title: "Section/NextButtonSection",
  component: NextButtonSection,
};

export default meta;

const PrimitiveNextButtonSection = () => {
  return <NextButtonSection />;
};

export const Default = {
  render: () => <PrimitiveNextButtonSection />,
};
