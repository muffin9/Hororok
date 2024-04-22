"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import ToastMessage from "@/components/common/ToastMessage";
import ToggleButton from "@/components/common/ToggleButton";
import { useState } from "react";
import useBookMarkFolderMutation from "@/Hooks/Api/useBookMarkFolderMutation";
import { useSearchParams } from "next/navigation";

interface SaveCreateEditProps {
  paramId?: number;
}

const SaveCreateEdit = ({ paramId }: SaveCreateEditProps) => {
  const searchParams = useSearchParams();
  const paramFolderName = searchParams.get("folderName");
  const paramColor = searchParams.get("color");
  const paramIsVisible = Boolean(searchParams.get("isVisible"));

  const { postBookmarkFolder, patchBookmarkFolder } =
    useBookMarkFolderMutation();
  const possibleColors = [
    "#FE8282",
    "#FFC43C",
    "#FF9C50",
    "#60DB71",
    "#47B584",
    "#B29EFF",
    "#F498E3",
  ];

  const [name, setName] = useState<string>(paramFolderName || "");
  const [color, setColor] = useState<string>(paramColor || "");
  const [isVisible, setIsVisible] = useState<boolean>(paramIsVisible || false);

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const checkDisabledSubmit = () => {
    if (name === "" || color === "") return true;
    return false;
  };

  const completeSubmit = () => {
    // paramId has -> patch axios, id no has -> post axios
    if (paramId)
      patchBookmarkFolder({ folderId: paramId, name, color, isVisible });
    else
      postBookmarkFolder({
        name,
        color,
        isVisible,
      });
  };

  return (
    <div className="p-4">
      <Input
        type="text"
        value={name}
        placeholder="폴더명을 입력해 주세요."
        onChange={handleChangeInputValue}
        className="w-full bg-gray-200 p-3 rounded"
      />
      <div className="flex gap-4 pt-4">
        {possibleColors.map((c: string) => {
          return (
            <button
              key={c}
              className={`w-[30px] h-[30px] rounded-full ${color === c ? "opacity-100" : "opacity-50"}`}
              style={{ backgroundColor: `${c}` }}
              onClick={() => setColor(c)}
            ></button>
          );
        })}
      </div>
      <div className="w-full flex justify-between items-center mt-[40px]">
        <div className="flex flex-col gap-1">
          <Text size="small" className="text-gray-800">
            지도에서 보기
          </Text>
          <Text size="extraSmall" className="text-gray-800">
            해당 폴더의 장소들이 지도 위에 표시돼요.
            <br />
            지도 위에 표시할 폴더는 최대 10개 선택할 수 있어요.
          </Text>
        </div>
        <ToggleButton folderId={paramId} isVisible={isVisible} />
      </div>
      <div className="w-[358px] fixed bottom-12">
        <Button
          size="full"
          onClick={completeSubmit}
          disabled={checkDisabledSubmit()}
        >
          완료
        </Button>
      </div>
      <ToastMessage />
    </div>
  );
};

export default SaveCreateEdit;
