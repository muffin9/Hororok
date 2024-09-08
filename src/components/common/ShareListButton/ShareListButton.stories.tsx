import ShareListButton from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ShareListButton> = {
  title: "Common/ShareListButton",
  component: ShareListButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ShareListButton>;
export const Default: Story = {};
