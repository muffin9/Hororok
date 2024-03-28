"use client";

import { useRouter } from "next/navigation";
import BackButton from "../common/BackButton";
import Button from "../common/Button";
import Icon from "../common/Icon";

import Text from "../common/Text";
import ContentInfo from "./ContentInfo";
import Star from "../common/Star";

const DetailInfo = () => {
  const router = useRouter();
  return (
    <section className="h-screen overflow-y-scroll">
      <div className={`bg-sampleImage bg-cover bg-center w-[390px] h-[228px]`}>
        <header className="flex justify-between px-4 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="back button"
            className="boxShadow-xl"
          >
            <Icon type="arrow_left_white" size="small" alt="뒤로 가기" />
          </button>
          <div className="flex gap-4">
            <Icon type="share_white" alt="공유하기" />
            <Icon type="bookmark_white" alt="저장하기" />
          </div>
        </header>
      </div>
      <div className="px-4 flex flex-col py-6 bg-white">
        <header className="flex justify-between items-center">
          <Text size="large" weight="bold">
            상호명
          </Text>
          <Button
            size="small"
            className="flex gap-2 bg-white border-[1px] border-solid border-silver"
            onClick={() => router.push("/review/create")}
          >
            <Icon size="small" type="edit" alt="edit" />
            <Text size="small" className="text-black">
              리뷰 쓰기
            </Text>
          </Button>
        </header>
        <div className="flex flex-col mt-2">
          <Text size="medium" className="text-gray-700">
            도로명 주소
          </Text>
          <div className="flex items-center gap-[2px]">
            <Star starSize="xSmall" starScore={5.0} />
            <Text size="small" weight="bold">
              5.0
            </Text>
            <Text size="extraSmall" className="text-gray-700">
              (12)
            </Text>
          </div>
          <div className="flex mt-2 gap-2">
            <button className="h-[31px] px-3 rounded-2xl border-[1px] border-solid border-primary-300">
              <Text size="small" className="text-primary-300">
                디카페인
              </Text>
            </button>
            <button className="h-[31px] px-3 rounded-2xl border-[1px] border-solid border-primary-300">
              <Text size="small" className="text-primary-300">
                개인작업/노트북
              </Text>
            </button>
            <button className="h-[31px] px-3 rounded-2xl border-[1px] border-solid border-primary-300">
              <Text size="small" className="text-primary-300">
                집중이 잘되는
              </Text>
            </button>
          </div>
        </div>
      </div>
      <ContentInfo />
    </section>
  );
};

export default DetailInfo;
