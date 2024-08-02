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
    placeholder: "어디 근처 카페 찾으세요? (ex. 망원역)",
  },
};
