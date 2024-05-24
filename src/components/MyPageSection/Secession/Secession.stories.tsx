import type { Meta } from "@storybook/react";
import Secession from ".";

const meta: Meta<typeof Secession> = {
  title: "MyPageSection/Secession",
  component: Secession,
};

export default meta; 

const PrimitiveSecession = () => {
  return <Secession />;
};

export const Default = {
  render: () => <PrimitiveSecession />,
};
