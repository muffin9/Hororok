import type { Meta } from "@storybook/react";
import TabMenu from ".";

const meta: Meta<typeof TabMenu> = {
  title: "Common/TabMenu",
  component: TabMenu,
};

export default meta;

const PrimitiveTabMenu = () => {
  return (
    <TabMenu
      menuInfo={[
        { id: "default", name: "기본정보", isClicked: true },
        { id: "menu", name: "메뉴", isClicked: false },
        { id: "photo", name: "사진", isClicked: false },
        { id: "review", name: "리뷰", isClicked: false },
      ]}
      handleOnMenuClick={() => console.log("menu clicked")}
    />
  );
};

export const Default = {
  render: () => <PrimitiveTabMenu />,
};
