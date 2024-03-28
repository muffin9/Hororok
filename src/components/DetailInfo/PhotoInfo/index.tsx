import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

interface PhotoInfoProps {
  moreButton?: boolean;
}

const PhotoInfo = ({ moreButton }: PhotoInfoProps) => {
  return (
    <div className="h-[250px] flex flex-col justify-center items-center px-4 py-6 bg-white">
      <Icon type="camera" size="xLarge" alt="camera" />
      <Text size="small" weight="bold" className="text-gray-600">
        아직 등록된 사진이 없어요
      </Text>
    </div>
  );
};

export default PhotoInfo;
