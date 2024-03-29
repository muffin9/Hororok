import type { Meta } from "@storybook/react";
import Calendar from ".";

const meta: Meta<typeof Calendar> = {
  title: "Section/Calendar",
  component: Calendar,
};

export default meta;

const PrimitiveCalendar = () => {
  return (
    <Calendar
      checkSelectDay={() => true}
      onClickday={() => console.log("clicked day")}
    />
  );
};

export const Default = {
  render: () => <PrimitiveCalendar />,
};
