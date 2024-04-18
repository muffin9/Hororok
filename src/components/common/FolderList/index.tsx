"use client";

import { dummySaveData } from "@/app/constants";
import { SaveDataType } from "@/interfaces/Save";
import SaveInfoBox from "../../SaveSection/SaveInfoBox";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

const FolderList = () => {
  const router = useRouter();

  const handleClickEdit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push("/save/createEdit");
  };

  const handleClickDelete = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    alert("서비스 준비중입니다....");
  };

  return (
    <div className="flex flex-col gap-4">
      {dummySaveData.map((data: SaveDataType) => {
        return (
          <div
            key={data.id}
            className="flex justify-between p-4 border-b-[1px] border-solid border-gray-200 cursor-pointer"
            onClick={() => router.push("/save/folderEdit")}
          >
            <SaveInfoBox saveData={data} />
            <div className="flex gap-1">
              <Button size="small" onClick={handleClickEdit}>
                수정
              </Button>
              <Button
                size="small"
                bgColor="bg-gray-400"
                onClick={handleClickDelete}
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
