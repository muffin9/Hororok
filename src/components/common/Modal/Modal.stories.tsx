import Modal from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  title: "Common/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;
export const Default: Story = {};
