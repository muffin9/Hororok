import SearchInput from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchInput> = {
  title: "Search/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;
export const Default: Story = {};
