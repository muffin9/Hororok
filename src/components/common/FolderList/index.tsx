"use client";

import SaveInfoBox from "@/components/SaveSection/SaveInfoBox";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import useBookMarkFolderMutation from "@/Hooks/Api/useBookMarkFolderMutation";
import { BookMarksType, FolderType, paramFolderType } from "@/interfaces/Save";
import ToastMessage from "../ToastMessage";
import useDebounce from "@/Hooks/useDebounce";
import { useCallback } from "react";

const FolderList = () => {
  const {
    bookMarks,
    deleteBookmarkFolder,
  }: {
    bookMarks: BookMarksType;
    deleteBookmarkFolder: (folderId: number) => void;
  } = useBookMarkFolderMutation();

  const router = useRouter();

  const handleClickUpdate = useDebounce(
    useCallback(
      (folderInfo: paramFolderType) => {
        router.push(
          `/save/createEdit/${folderInfo.folderId}?folderName=${folderInfo.name}&color=${folderInfo.color.slice(1)}&isVisible=${folderInfo.isVisible}`
        );
      },
      [router]
    ),
    500
  );

  const handleClickDelete = useDebounce(
    useCallback(
      (folderId: number) => {
        deleteBookmarkFolder(folderId);
      },
      [deleteBookmarkFolder]
    ),
    500
  );

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
                {!data.defaultFolder && (
                  <>
                    <Button
                      size="small"
                      onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        const folderInfo = {
                          folderId: data.folderId,
                          name: data.name,
                          color: data.color,
                          isVisible: data.visible,
                        };
                        handleClickUpdate(folderInfo);
                      }}
                    >
                      수정
                    </Button>
                    <Button
                      size="small"
                      bgColor="bg-gray-400"
                      onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                        e.stopPropagation();
                        handleClickDelete(data.folderId);
                      }}
                    >
                      삭제
                    </Button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      <ToastMessage />
    </div>
  );
};

export default FolderList;
