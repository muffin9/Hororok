import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { FolderType } from "@/interfaces/Save";

interface SaveInfoBoxProps {
  folderData: FolderType;
}

const SaveInfoBox = ({ folderData }: SaveInfoBoxProps) => {
  return (
    <div className="flex items-center">
      <div className="flex gap-3">
        <div
          className={`flex justify-center items-center w-[40px] h-[40px] rounded`}
          style={{
            backgroundColor: `${folderData.defaultFolder ? "#FE8282" : folderData.color}`,
          }}
        >
          <Icon size="small" type="coffee" alt="coffee Image" />
        </div>
        <div className="flex flex-col">
          <Text size="medium">{folderData.name}</Text>
          <Text size="extraSmall" className="text-gray-600">
            개수 {folderData.bookmarkCount || 0}/99
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SaveInfoBox;
