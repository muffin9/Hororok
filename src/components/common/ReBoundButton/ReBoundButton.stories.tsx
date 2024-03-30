import ReBoundButton from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ReBoundButton> = {
  title: "Common/ReBoundButton",
  component: ReBoundButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ReBoundButton>;
export const Default: Story = {};
