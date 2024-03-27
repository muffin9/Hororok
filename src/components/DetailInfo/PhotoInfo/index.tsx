import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

const PhotoInfo = () => {
  return (
    <div className="h-[250px] flex flex-col justify-center items-center">
      <Icon type="camera" size="xLarge" alt="camera" />
      <Text size="small" weight="bold" className="text-gray-600">
        아직 등록된 사진이 없어요
      </Text>
    </div>
  );
};

export default PhotoInfo;
