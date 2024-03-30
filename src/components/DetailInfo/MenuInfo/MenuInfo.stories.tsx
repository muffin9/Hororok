import type { Meta } from "@storybook/react";
import MenuInfo from ".";

const meta: Meta<typeof MenuInfo> = {
  title: "MenuInfo/Default",
  component: MenuInfo,
};

export default meta;

const PrimitiveMenuInfo = () => {
  return <MenuInfo cafeMenuInfo={[]} />;
};

export const Default = {
  render: () => <PrimitiveMenuInfo />,
};
