import Input from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;
export const Default: Story = {
  args: {
    placeholder: "텍스트 필드",
  },
};
