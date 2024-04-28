import type { Meta } from "@storybook/react";
import SimilarHeader from ".";

const meta: Meta<typeof SimilarHeader> = {
  title: "Section/SimilarHeader",
  component: SimilarHeader,
};

export default meta;

const PrimitiveSimilarHeader = () => {
  return (
    <SimilarHeader
      resultPlanInfos={{
        planId: 0,
        matchType: "",
        locationName: "",
        minutes: 10,
        visitDateTime: "",
        categoryKeywords: {
          menu: ["americano"],
          atmosphere: [],
          facility: [],
          purpose: [],
          theme: [],
        },
        recommendCafes: [],
        matchCafes: [],
        similarCafes: [],
      }}
    />
  );
};

export const Default = {
  render: () => <PrimitiveSimilarHeader />,
};
