import type { Meta } from "@storybook/react";
import PrivacySection from ".";

const meta: Meta<typeof PrivacySection> = {
  title: "PrivacySection",
  component: PrivacySection,
};

export default meta;

const PrimitivePrivacySection = () => {
  return <PrivacySection />;
};

export const Default = {
  render: () => <PrimitivePrivacySection />,
};
