import type { Meta } from "@storybook/react";
import LoadingSpinner from "./";

const meta: Meta<typeof LoadingSpinner> = {
  title: "Primitive/LoadingSpinner",
  component: LoadingSpinner,
};

export default meta;

const PrimitiveLoadingSpinner = () => {
  return <LoadingSpinner size="small" />;
};

export const Primary = {
  render: () => <PrimitiveLoadingSpinner />,
};

export const LargeLoadingSpinner = {
  render: () => {
    return <LoadingSpinner size="large" />;
  },
};
