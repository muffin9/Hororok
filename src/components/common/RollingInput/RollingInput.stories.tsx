import RollingInput from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RollingInput> = {
  title: "Common/RollingInput",
  component: RollingInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RollingInput>;

export const Default: Story = {};
