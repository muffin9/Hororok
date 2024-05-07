import type { Meta } from "@storybook/react";
import CardResultCafeInfo from ".";

const meta: Meta<typeof CardResultCafeInfo> = {
  title: "Components/CardResultCafeInfo",
  component: CardResultCafeInfo,
};

export default meta;

const PrimitiveCardResultCafeInfo = () => {
  const dummyCafeData = [
    {
      bookmarks: [],
      createdDate: "",
      lastModifiedDate: "",
      id: 1,
      name: "",
      phoneNumber: "",
      roadAddress: "",
      longitude: 123,
      latitude: 456,
      starRating: 3.0,
      reviewCount: 3,
      imageUrl: "",
    },
  ];
  return <CardResultCafeInfo cafeDatas={dummyCafeData} />;
};

export const Default = {
  render: () => <PrimitiveCardResultCafeInfo />,
};
