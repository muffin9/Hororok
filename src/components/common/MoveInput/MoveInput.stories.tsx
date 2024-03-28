import MoveInput from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MoveInput> = {
  title: "Common/MoveInput",
  component: MoveInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MoveInput>;
export const Default: Story = {
  args: {
    placeholder: "어디 근처 카페 찾으세요?",
  },
};
