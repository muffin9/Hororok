import Splash from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Splash> = {
  title: "Common/Splash",
  component: Splash,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Splash>;

export const Default: Story = {};
