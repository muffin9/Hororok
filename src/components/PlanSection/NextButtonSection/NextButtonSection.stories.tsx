import type { Meta } from "@storybook/react";
import NextButtonSection from ".";

const meta: Meta<typeof NextButtonSection> = {
  title: "Section/NextButtonSection",
  component: NextButtonSection,
};

export default meta;

const PrimitiveNextButtonSection = () => {
  return <NextButtonSection nextStep="1" />;
};

export const Default = {
  render: () => <PrimitiveNextButtonSection />,
};
