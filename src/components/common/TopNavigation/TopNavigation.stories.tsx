import TopNavigation from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TopNavigation> = {
  title: "Common/TopNavigation",
  component: TopNavigation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TopNavigation>;

export const Default: Story = {};
