import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const TextButton: Story = {
  args: {
    size: "full",
    children: "버튼",
    onClick: () => {
      console.log("clicked");
    },
  },
};

export const IconButton: Story = {
  args: {
    size: "medium",
    children: (
      <>
        <Icon type="edit" alt="리뷰쓰기" />
        <Text size="medium" className="text-black">
          리뷰 쓰기
        </Text>
      </>
    ),
    onClick: () => {
      console.log("clicked");
    },
    className:
      "bg-white border-[1px] border-solid border-gray-400 enabled:hover:bg-primary-100",
  },
};
