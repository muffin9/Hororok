"use client";

import Image from "next/image";
import BackButton from "@/components/common/BackButton";
import Icon from "@/components/common/Icon";
import Star from "@/components/common/Star";
import Text from "@/components/common/Text";
import Condition from "@/components/Condition";
import { useState } from "react";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";
import { useRouter } from "next/navigation";

type SelectedItemsState = {
  [filterId: string]: string | undefined;
};

const ReviewCreate = () => {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<SelectedItemsState>({});
  const handleItemClick = (filterId: string, itemId: string) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [filterId]: prevState[filterId] === itemId ? undefined : itemId,
    }));
  };

  const checkSelected = (conditionId: string, clickedItemId: string) => {
    return selectedItems[conditionId] === clickedItemId;
  };

  const onReviewSubmit = () => {
    alert("서비스 준비중입니다..");
  };

  return (
    <div className="h-screen relative bg-white overflow-y-scroll">
      <header className="w-full h-[50px] relative flex justify-between">
        <div></div>
        <div className="m-auto">리뷰 쓰기</div>
        <button
          className="absolute top-1/2 right-[16px] transform -translate-y-1/2"
          onClick={() => router.back()}
        >
          <Icon type="close" alt="close" />
        </button>
      </header>
      <div className="flex flex-col items-center gap-4 py-6">
        <Text size="xLarge" weight="bold">
          상호명 방문은 어땠나요?
        </Text>
        <Star starSize="large" starScore={1.0} />
      </div>
      <div className="flex flex-col gap-3 px-4 pt-6 pb-3 border-t-[1px] border-b-[1px] border-gray-200 border-solid">
        <div className="w-full flex gap-1.5 overflow-x-scroll">
          <label
            id="fileInput"
            className="min-w-[100px] h-[100px] flex justify-center items-center border-solid border-[1px] border-gray-300 rounded-lg cursor-pointer"
          >
            <Icon type="camera" size="xLarge" alt="camera" />
            <input type="file" id="fileInput" className="hidden" />
          </label>
          <Image
            src={"/assets/Images/profile.png"}
            width={100}
            height={100}
            alt="uploaded image"
          />
          <Image
            src={"/assets/Images/profile.png"}
            width={100}
            height={100}
            alt="uploaded image"
          />
          <Image
            src={"/assets/Images/profile.png"}
            width={100}
            height={100}
            alt="uploaded image"
          />
          <Image
            src={"/assets/Images/profile.png"}
            width={100}
            height={100}
            alt="uploaded image"
          />
        </div>
        <Text size="small" className="text-gray-800">
          최대 5장 첨부할 수 있어요
        </Text>
      </div>
      <div className="px-4">
        <Condition
          handleItemClick={handleItemClick}
          checkSelected={checkSelected}
        />
      </div>
      <div className="px-4">
        <div className="flex flex-col gap-7 mt-5">
          <Text size="medium">리뷰</Text>
          <TextArea placeholder="가게에 대한 소감을 30자 이상 적어주세요" />
        </div>
        <div className="flex flex-col gap-7 mt-5">
          <Text size="medium">특이사항</Text>
          <TextArea placeholder="방문에 도움이 될 만한 정보를 공유해주세요.ex ) 콘센트 유무 / 2시간 이용 제한 / 평일 점심 웨이팅 1시간 / 영업시간 일시 변경 등" />
        </div>
        <div className="mt-10">
          <Button
            size="full"
            type="submit"
            onClick={(e: React.SyntheticEvent<HTMLButtonElement>) =>
              onReviewSubmit()
            }
          >
            등록하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCreate;
