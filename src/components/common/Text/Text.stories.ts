import Text from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
  title: "Common/Text",
  component: Text,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    size: "large",
    weight: "bold",
    children: "텍스트",
    className: "text-primary-300",
  },
};
