import type { Meta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import React from "react";

import BackButton from ".";

const meta: Meta<typeof BackButton> = {
  title: "atoms/BackButton",
  component: BackButton,
};

export default meta;

export const PrimaryBackButton = {
  render: () => <BackButton />,
  play: async ({ canvasElement, step }: any) => {
    const canvas = within(canvasElement);

    const backButton = canvas.getByRole("button");

    await step("clicked Login BackButton", async () => {
      await backButton.click();
    });

    await userEvent.type(backButton, "router push prev page", {
      delay: 100,
    });
  },
};
