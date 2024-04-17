import ToastMessage from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToastMessage> = {
  title: "Common/ToastMessage",
  component: ToastMessage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToastMessage>;

export const Default: Story = {};
