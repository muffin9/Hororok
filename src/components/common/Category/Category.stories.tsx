import Category from ".";
import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../Icon";

const meta: Meta<typeof Category> = {
  title: "Common/Category",
  component: Category,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Category>;

export const Default: Story = {
  args: {
    name: "분위기 좋아요",
  },
};

export const IconCategory: Story = {
  args: {
    name: "분위기 좋아요",
    icon: <Icon type="check" size="small" alt="check" />,
    posIcon: "left",
  },
};
