import RefreshButton from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RefreshButton> = {
  title: "Common/RefreshButton",
  component: RefreshButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RefreshButton>;
export const Default: Story = {};
