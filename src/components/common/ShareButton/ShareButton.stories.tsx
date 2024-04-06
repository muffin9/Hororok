import ShareButton from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ShareButton> = {
  title: "Common/ShareButton",
  component: ShareButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ShareButton>;
export const Default: Story = {};
