"use client";

import { dummySaveData } from "@/app/constants";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { SaveDataType } from "@/interfaces/Save";
import SaveInfoBox from "../SaveInfoBox";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

const FolderList = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex p-4 gap-1">
        <Icon size="xSmall" type="info" alt="info" />
        <Text size="extraSmall" className="text-gray-800">
          하나의 폴더에 99개까지 저장할 수 있어요.
        </Text>
      </div>
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
                <Button
                  size="small"
                  onClick={() => router.push("/save/createEdit")}
                >
                  수정
                </Button>
                <Button size="small" bgColor="bg-gray-400">
                  삭제
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FolderList;
