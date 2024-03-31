"use client";

import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Icon from "../common/Icon";

import Text from "../common/Text";
import ContentInfo from "./ContentInfo";
import Star from "../common/Star";
import useCafeDetailInfo from "@/Hooks/Cafe/useCafeDetailInfo";
import { CafeDetailInfoType, CafeKeyWordType } from "@/interfaces/Cafe";

interface DetailInfoProps {
  cafeId: string;
}

const DetailInfo = ({ cafeId }: DetailInfoProps) => {
  const { data }: { data: CafeDetailInfoType } = useCafeDetailInfo(cafeId);

  const router = useRouter();

  return (
    data && (
      <section className="h-screen overflow-y-scroll" key={data.id}>
        <div
          className={`bg-sampleImage bg-cover bg-center w-[390px] h-[228px]`}
        >
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
              {data.cafeName}
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
              {data.roadAddress}
            </Text>
            <div className="flex items-center gap-[2px]">
              <Star starSize="xSmall" starScore={Math.ceil(+data.starRating)} />
              <Text size="small" weight="bold">
                {/* TODO: starCount 데이터 교체 필요. */}
                {data.reviewCount.toFixed(1)}
              </Text>
              <Text size="extraSmall" className="text-gray-700">
                ({data.reviewCount})
              </Text>
            </div>
            <div className="flex mt-2 gap-2">
              {data.cafeKeywords.map((cafeKeyword: CafeKeyWordType) => {
                return (
                  <button
                    key={cafeKeyword.id}
                    className="h-[31px] px-3 rounded-2xl border-[1px] border-solid border-primary-300"
                  >
                    <Text size="small" className="text-primary-300">
                      {cafeKeyword.name}
                    </Text>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <ContentInfo cafeDetailInfo={data} />
      </section>
    )
  );
};

export default DetailInfo;
