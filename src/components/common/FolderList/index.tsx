"use client";

import SaveInfoBox from "@/components/SaveSection/SaveInfoBox";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import useBookMarkFolderMutation from "@/Hooks/Api/useBookMarkFolderMutation";
import { BookMarksType, FolderType } from "@/interfaces/Save";

interface FolderInfoType {
  folderId: number;
  folderName: string;
  color: string;
  isVisible: boolean;
}

const FolderList = () => {
  const {
    bookMarks,
    deleteBookmarkFolder,
  }: {
    bookMarks: BookMarksType;
    deleteBookmarkFolder: (folderId: number) => void;
  } = useBookMarkFolderMutation();

  const router = useRouter();

  const handleClickUpdate = (
    e: React.SyntheticEvent<HTMLButtonElement>,
    folderInfo: FolderInfoType
  ) => {
    e.stopPropagation();
    router.push(
      `/save/createEdit/id=${folderInfo.folderId}?folderName=${folderInfo.folderName}&color=${folderInfo.color}&isVisible=${folderInfo.isVisible}`
    );
  };

  const handleClickDelete = (
    e: React.SyntheticEvent<HTMLButtonElement>,
    folderId: number
  ) => {
    e.stopPropagation();
    deleteBookmarkFolder(folderId);
  };

  return (
    <div className="flex flex-col gap-4">
      {bookMarks &&
        bookMarks.folders.map((data: FolderType) => {
          return (
            <div
              key={data.folderId}
              className="flex justify-between p-4 border-b-[1px] border-solid border-gray-200 cursor-pointer"
              onClick={() => router.push(`/save/folderEdit/${data.folderId}`)}
            >
              <SaveInfoBox folderData={data} />
              <div className="flex gap-1">
                <Button
                  size="small"
                  onClick={(e) => {
                    const folderInfo = {
                      folderId: data.folderId,
                      folderName: data.name,
                      color: data.color,
                      isVisible: data.visible,
                    };
                    handleClickUpdate(e, folderInfo);
                  }}
                >
                  수정
                </Button>

                <Button
                  size="small"
                  bgColor="bg-gray-400"
                  onClick={(e: React.SyntheticEvent<HTMLButtonElement>) =>
                    handleClickDelete(e, data.folderId)
                  }
                >
                  삭제
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FolderList;
