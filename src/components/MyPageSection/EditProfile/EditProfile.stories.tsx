import type { Meta } from "@storybook/react";
import EditProfile from ".";

const meta: Meta<typeof EditProfile> = {
  title: "MyPageSection/EditProfile",
  component: EditProfile,
};

export default meta;

const PrimitiveEditProfile = () => {
  return <EditProfile />;
};

export const Default = {
  render: () => <PrimitiveEditProfile />,
};
