import type { Meta } from "@storybook/react";
import ResultList from ".";

const meta: Meta<typeof ResultList> = {
  title: "Section/ResultList",
  component: ResultList,
};

export default meta;

const PrimitiveResultList = () => {
  return <ResultList />;
};

export const Default = {
  render: () => <PrimitiveResultList />,
};
