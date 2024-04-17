"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import ToastMessage from "@/components/common/ToastMessage";
import ToggleButton from "@/components/common/ToggleButton";
import useToastStore from "@/store/useToastStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SaveCreateEditProps {
  id?: number;
  folderName?: string;
  color?: string;
  show?: boolean;
}

const SaveCreateEdit = ({
  id,
  folderName,
  color,
  show,
}: SaveCreateEditProps) => {
  const possibleColors = [
    "#FE8282",
    "#FFC43C",
    "#FF9C50",
    "#60DB71",
    "#47B584",
    "#B29EFF",
    "#F498E3",
  ];
  // id has -> create axios, id no has -> modify axios
  const router = useRouter();
  const [inputValue, setInputValue] = useState(folderName || "");
  const [folderColor, setFolderColor] = useState(color || "");
  const { showMessage } = useToastStore();

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const checkDisabledSubmit = () => {
    if (inputValue === "" || folderColor === "") return true;
    return false;
  };

  const completeSubmit = () => {
    showMessage("새 폴더를 추가했어요");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className="p-4">
      <Input
        type="text"
        value={inputValue}
        placeholder="폴더명을 입력해 주세요."
        onChange={handleChangeInputValue}
        className="w-full bg-gray-200 p-3 rounded"
      />
      <div className="flex gap-4 pt-4">
        {possibleColors.map((c: string) => {
          return (
            <button
              key={c}
              className={`w-[30px] h-[30px] rounded-full`}
              style={{ backgroundColor: `${c}` }}
              onClick={() => setFolderColor(c)}
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
        <ToggleButton saveId={id} isShow={show || false} />
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
