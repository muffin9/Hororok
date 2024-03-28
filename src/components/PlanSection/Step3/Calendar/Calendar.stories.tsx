import type { Meta } from "@storybook/react";
import Calendar from ".";

const meta: Meta<typeof Calendar> = {
  title: "Section/Calendar",
  component: Calendar,
};

export default meta;

const PrimitiveCalendar = () => {
  return <Calendar />;
};

export const Default = {
  render: () => <PrimitiveCalendar />,
};
