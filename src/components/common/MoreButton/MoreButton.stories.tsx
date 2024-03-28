import MoreButton from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MoreButton> = {
  title: "Common/MoreButton",
  component: MoreButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MoreButton>;
export const Default: Story = {};
