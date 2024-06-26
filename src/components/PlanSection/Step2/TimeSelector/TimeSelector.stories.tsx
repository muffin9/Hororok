import type { Meta } from "@storybook/react";
import TimeSelector from ".";

const meta: Meta<typeof TimeSelector> = {
  title: "Section/TimeSelector",
  component: TimeSelector,
};

export default meta;

const PrimitiveTimeSelector = () => {
  return (
    <TimeSelector
      selectId={30}
      setSelectId={() => console.log("select minute")}
    />
  );
};

export const Default = {
  render: () => <PrimitiveTimeSelector />,
};
