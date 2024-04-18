import Text from "@/components/common/Text";
import { SaveDataType } from "@/interfaces/Save";

interface SaveInfoBoxProps {
  saveData: SaveDataType;
}

const SaveInfoBox = ({ saveData }: SaveInfoBoxProps) => {
  return (
    <div className="flex items-center">
      <div className="flex gap-3">
        <div
          className="w-[40px] h-[40px] border-solid border-[1px] border-gray-200 rounded"
          style={{
            backgroundImage: `url(https://picsum.photos/id/237/200/300)`,
          }}
        />
        <div className="flex flex-col">
          <Text size="medium">{saveData.folderName}</Text>
          <Text size="extraSmall" className="text-gray-600">
            개수 {saveData.count}/99
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SaveInfoBox;
