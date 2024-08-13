"use client";

import useBookMarkFolderMutation from "@/Hooks/Api/useBookMarkFolderMutation";
import useBookMarkMutation from "@/Hooks/Api/useBookMarkMutation";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { BookmarkType } from "@/interfaces/Save";
import { useRouter } from "next/navigation";
import useGetFolderList from "@/Hooks/Api/useGetFolderList";
import ToastMessage from "@/components/common/ToastMessage";

const FolderEdit = ({ folderId }: { folderId: number }) => {
  const router = useRouter();
  const { folderList, folderListLoading } = useGetFolderList(folderId);
  const { deleteBookmark } = useBookMarkMutation();
  const { deleteBookmarkFolder } = useBookMarkFolderMutation();

  return (
    <div>
      <div className="flex gap-3 justify-end px-4 cursor-pointer">
        {/* <button onClick={() => router.push(`/save/folderEdit/${folderId}/map`)}>
          <Icon size="small" type="map" alt="map" />
        </button> */}

        {folderList?.folderName !== "기본 폴더" && (
          <button
            onClick={() => {
              if (window.confirm("정말로 이 폴더를 삭제하시겠습니까?")) {
                deleteBookmarkFolder(folderId);
                router.push("/map");
              }
            }}
          >
            <Icon size="small" type="trash" alt="trash" />
          </button>
        )}
      </div>
      <div className="flex gap-1 justify-center">
        <Text size="large">{folderList?.folderName || ""}</Text>
        <Icon type="edit" alt="edit" />
      </div>
      <div className="flex p-4 gap-1">
        <Text size="extraSmall" className="text-gray-800">
          하나의 폴더에 99개까지 저장할 수 있어요.
        </Text>
      </div>
      <div className="flex flex-col">
        {folderList &&
          folderList.bookmarks.map((bookmark: BookmarkType) => {
            return (
              <div
                key={bookmark.bookmarkId}
                className="flex justify-between py-3 border-solid border-b-[1px] border-gray-200"
              >
                <div className="flex gap-3 px-4">
                  <div
                    className={`flex justify-center items-center w-[40px] h-[40px] rounded`}
                    style={{
                      backgroundColor: `${folderList.folderColor === "기본 색상" ? "#FE8282" : folderList.folderColor}`,
                    }}
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
                  onClick={() => deleteBookmark(bookmark.bookmarkId)}
                >
                  <Icon type="close" alt="close" />
                </button>
              </div>
            );
          })}
      </div>
      <ToastMessage />
    </div>
  );
};

export default FolderEdit;
