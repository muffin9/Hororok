import TextArea from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  title: "Common/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextArea>;
export const Default: Story = {};
