import { useRef } from "react";
import Text from "../common/Text";
import Icon from "../common/Icon";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import SaveInfoBox from "./SaveInfoBox";
import { SaveDataType } from "@/interfaces/Save";
import { dummySaveData } from "@/app/constants";
import ToggleButton from "../common/ToggleButton";
import ToastMessage from "../common/ToastMessage";
import useToastStore from "@/store/useToastStore";

const SaveSection = () => {
  const router = useRouter();
  const saveRef = useRef<HTMLDivElement>(null);
  const { showMessage } = useToastStore();

  const handleClickFolder = () => {
    showMessage("기본 폴더'에 카페를 저장했어요!");
  };

  return (
    <section
      ref={saveRef}
      className="w-[390px] bg-white rounded-tr-2xl rounded-tl-2xl shadow-xl border-b-[1px] border-solid border-gray-200"
    >
      <div className="p-4">
        <header className="flex justify-between">
          <div className="flex gap-1">
            <Text size="small" className="text-black">
              폴더
            </Text>
            <Text size="small" className="text-primary-300">
              4
            </Text>
          </div>
          <button
            className="flex gap-1 cursor-pointer"
            onClick={() => router.push("/save/folderList")}
          >
            <Icon type="edit" alt="edit" />
            <Text size="small" className="text-primary-300">
              편집하기
            </Text>
          </button>
        </header>
        <div className="flex items-center h-10 mt-2 px-4 text-gray-800 bg-gray-200 text-sm rounded-lg">
          하나의 폴더에{" "}
          <Text size="small" className="text-primary-300">
            99개까지 저장
          </Text>
          할 수 있어요
        </div>
        <div className="flex flex-col gap-4 p-4 px-2">
          {dummySaveData.map((data: SaveDataType) => {
            return (
              <div
                key={data.id}
                className="flex justify-between cursor-pointer"
                onClick={handleClickFolder}
              >
                <SaveInfoBox saveData={data} />
                <ToggleButton saveId={data.id} isShow={false} />
              </div>
            );
          })}
        </div>
        <Button
          size="full"
          className="bg-white border-[1px] border-solid border-primary-300 roudned-lg"
          onClick={() => router.push("/save/createEdit")}
        >
          <Text size="small" className="text-primary-300">
            + 새 그룹 추가
          </Text>
        </Button>
      </div>
      <ToastMessage />
    </section>
  );
};

export default SaveSection;
