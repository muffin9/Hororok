import ToggleButton from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToggleButton> = {
  title: "Common/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {};
