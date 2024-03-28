"use client";

import { useRouter } from "next/navigation";
import BackButton from "../common/BackButton";
import Button from "../common/Button";
import Icon from "../common/Icon";

import Text from "../common/Text";
import ContentInfo from "./ContentInfo";

const DetailInfo = () => {
  const router = useRouter();
  return (
    <section className="h-screen bg-white overflow-y-scroll">
      <div className={`bg-sampleImage bg-cover bg-center w-[390px] h-[228px]`}>
        <header className="flex justify-between px-4 pt-4">
          <BackButton />
          <div className="flex gap-4">
            <Icon type="share" alt="공유하기" />
            <Icon type="bookmark" alt="저장하기" />
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
            <Text size="small">리뷰 쓰기</Text>
          </Button>
        </header>
        <div className="flex flex-col mt-2">
          <Text size="medium" className="text-gray-700">
            도로명 주소
          </Text>
          <div className="flex items-center gap-[2px]">
            <Icon type="star" size="xSmall" alt="star" />
            <Icon type="star" size="xSmall" alt="star" />
            <Icon type="star" size="xSmall" alt="star" />
            <Icon type="star" size="xSmall" alt="star" />
            <Icon type="star" size="xSmall" alt="star" />
            <Text size="small" weight="bold">
              5.0
            </Text>
            <Text size="extraSmall" className="text-gray-700">
              (12)
            </Text>
          </div>
          <div className="flex mt-2 gap-4">
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
