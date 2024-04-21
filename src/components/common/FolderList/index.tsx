"use client";

import SaveInfoBox from "@/components/SaveSection/SaveInfoBox";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import useBookMarkFolderMutation from "@/Hooks/Api/useBookMarkFolderMutation";
import { BookMarksType, FolderType } from "@/interfaces/Save";
import Link from "next/link";

const FolderList = () => {
  const {
    bookMarks,
    deleteBookmarkFolder,
  }: {
    bookMarks: BookMarksType;
    deleteBookmarkFolder: (folderId: number) => void;
  } = useBookMarkFolderMutation();

  const router = useRouter();

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
                <Link
                  href={{
                    pathname: `/save/createEdit?folderId=${data.folderId}`,
                    query: {
                      folderName: data.name,
                      color: data.color,
                      isVisible: data.visible,
                    },
                  }}
                >
                  <Button size="small">수정</Button>
                </Link>
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
