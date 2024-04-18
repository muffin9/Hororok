import FolderList from "@/components/common/FolderList";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import TopNavigation from "@/components/common/TopNavigation";

export default function FolderListPage() {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="나의 폴더 편집" />
      <div className="flex p-4 gap-1">
        <Icon size="xSmall" type="info" alt="info" />
        <Text size="extraSmall" className="text-gray-800">
          하나의 폴더에 99개까지 저장할 수 있어요.
        </Text>
      </div>
      <FolderList />
    </main>
  );
}
