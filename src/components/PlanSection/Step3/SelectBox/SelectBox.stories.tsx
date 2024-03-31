import SelectBox from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectBox> = {
  title: "Common/SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SelectBox>;
export const Default: Story = {};
