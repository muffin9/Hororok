import LoginComponent from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoginComponent> = {
  title: "Common/LoginComponent",
  component: LoginComponent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoginComponent>;

export const Default: Story = {};
