import type { Meta } from "@storybook/react";
import Profile from ".";

const meta: Meta<typeof Profile> = {
  title: "Section/Profile",
  component: Profile,
};

export default meta;

const PrimitiveProfile = () => {
  return <Profile />;
};

export const Default = {
  render: () => <PrimitiveProfile />,
};
