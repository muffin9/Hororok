import Tag from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tag> = {
  title: "Common/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    tagName: "루프탑",
  },
};
