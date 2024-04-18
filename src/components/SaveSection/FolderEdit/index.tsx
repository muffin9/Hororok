import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

interface FolderEditProps {
  saveData: any;
}

const FolderEdit = ({ saveData }: FolderEditProps) => {
  return (
    <div>
      <div className="flex gap-1 justify-center">
        <Text size="large">폴더이름</Text>
        <Icon type="edit" alt="edit" />
      </div>
      <div className="flex p-4 gap-1">
        <Icon size="xSmall" type="info" alt="info" />
        <Text size="extraSmall" className="text-gray-800">
          하나의 폴더에 99개까지 저장할 수 있어요.
        </Text>
      </div>
      <div className="flex flex-col">
        {saveData.map((data) => {
          return (
            <div
              key={data.id}
              className="flex justify-between py-3 border-solid border-b-[1px] border-gray-200"
            >
              <div className="flex gap-3 px-4">
                <Icon type="defaultCup" alt="cup" />
                <div className="flex flex-col">
                  <Text size="medium" className={`text-${data.color}`}>
                    {data.cafeName}
                  </Text>
                  <Text size="small" className="text-gray-700">
                    {data.address}
                  </Text>
                </div>
              </div>
              <div className="px-4 cursor-pointer">
                <Icon type="close" alt="close" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FolderEdit;
