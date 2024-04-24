import useBookMarkMutation from "@/Hooks/Api/useBookMarkMutation";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { BookmarkType, FolderListType } from "@/interfaces/Save";

interface FolderEditProps {
  folderList: FolderListType;
}

const FolderEdit = ({ folderList }: FolderEditProps) => {
  const { deleteBookmark } = useBookMarkMutation();

  return (
    <div>
      <div className="flex gap-1 justify-center">
        <Text size="large">{folderList?.folderName || ""}</Text>
        <Icon type="edit" alt="edit" />
      </div>
      <div className="flex p-4 gap-1">
        <Icon size="xSmall" type="info" alt="info" />
        <Text size="extraSmall" className="text-gray-800">
          하나의 폴더에 99개까지 저장할 수 있어요.
        </Text>
      </div>
      <div className="flex flex-col">
        {folderList &&
          folderList.bookmarks.map((bookmark: BookmarkType) => {
            return (
              <div
                key={bookmark.cafeId}
                className="flex justify-between py-3 border-solid border-b-[1px] border-gray-200"
              >
                <div className="flex gap-3 px-4">
                  <div
                    className={`flex justify-center items-center w-[40px] h-[40px] rounded`}
                    style={{ backgroundColor: `${folderList.folderColor}` }}
                  >
                    <Icon size="small" type="coffee" alt="coffee Image" />
                  </div>
                  <div className="flex flex-col">
                    <Text
                      size="medium"
                      className={`text-${folderList.folderColor}`}
                    >
                      {bookmark.cafeName}
                    </Text>
                    <Text size="small" className="text-gray-700">
                      {bookmark.roadAddress}
                    </Text>
                  </div>
                </div>

                <button
                  className="px-4 cursor-pointer"
                  onClick={() => deleteBookmark(bookmark.cafeId)}
                >
                  <Icon type="close" alt="close" />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FolderEdit;
