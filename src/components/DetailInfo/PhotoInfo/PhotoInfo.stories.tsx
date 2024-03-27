import type { Meta } from "@storybook/react";
import PhotoInfo from ".";

const meta: Meta<typeof PhotoInfo> = {
  title: "Section/PhotoInfo",
  component: PhotoInfo,
};

export default meta;

const PrimitivePhotoInfo = () => {
  return <PhotoInfo />;
};

export const Default = {
  render: () => <PrimitivePhotoInfo />,
};
