import Icon from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Common/Icon",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Icon>;
export const Default: Story = {
  args: {
    type: "logo",
    size: "medium",
    alt: "로고",
  },
};
