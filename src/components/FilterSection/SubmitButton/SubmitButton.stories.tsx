import type { Meta } from "@storybook/react";
import SubmitButton from ".";

const meta: Meta<typeof SubmitButton> = {
  title: "Search/SubmitButton",
  component: SubmitButton,
};

export default meta;

const PrimitiveSubmitButton = () => {
  return <SubmitButton onSubmit={() => console.log("submit.")} />;
};

export const Default = {
  render: () => <PrimitiveSubmitButton />,
};
