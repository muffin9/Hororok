"use client";

import { CafeType } from "@/store/usePlanMatchStore";
import { useRouter } from "next/navigation";
import Text from "../common/Text";
import Icon from "../common/Icon";
import { CafeInfoType } from "@/interfaces/Cafe";
import ShareButton from "../common/ShareButton";

interface CardResultCafeInfoProps {
  cafeDatas: CafeType[] | CafeInfoType[];
}

const CardResultCafeInfo = ({ cafeDatas }: CardResultCafeInfoProps) => {
  const router = useRouter();
  return (
    cafeDatas &&
    cafeDatas.map((cafeData: CafeType | CafeInfoType) => {
      return (
        <div
          key={cafeData.id}
          className="flex gap-3 my-6 cursor-pointer"
          onClick={() => router.push(`/cafelist/${cafeData.id}`)}
        >
          <div
            className={`bg-cover bg-center w-[100px] h-[100px] rounded-lg`}
            style={{ backgroundImage: `url(http:${cafeData.imageUrl})` }}
          />
          <div className="w-full flex flex-col py-4 gap-3">
            <header className="flex justify-between">
              <Text size="large" className="text-black">
                {cafeData.name}
              </Text>
              <div className="flex gap-4">
                <ShareButton />
                <Icon type="bookmark" size="small" alt="북마크" />
              </div>
            </header>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <Icon type="star" size="xSmall" alt="star" />
                <Text size="small" className="text-black">
                  {cafeData.starRating}
                </Text>
                <Text size="extraSmall" className="text-gray-700">
                  ({cafeData.reviewCount})
                </Text>
              </div>
              <Text size="extraSmall" className="text-gray-700">
                {cafeData.roadAddress}
              </Text>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default CardResultCafeInfo;
