import MyNavigation from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MyNavigation> = {
  title: "Common/MyNavigation",
  component: MyNavigation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MyNavigation>;

export const Default: Story = {};
