"use client";

import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { CafeInfoType } from "@/interfaces/Cafe";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";
import { useRouter } from "next/navigation";
import PlanResultHeader from "../PlanResultHeader";
import Button from "@/components/common/Button";

const PlanResultSection = () => {
  const router = useRouter();
  const { searchResultList } = useSearcResultListStorehPlace();

  return (
    <section className="w-[390px] h-1/2 z-[1000] px-4 pb-12 py-4 bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl boxShadow-xl overflow-x-hidden overflow-y-scroll">
      <PlanResultHeader />
      {searchResultList &&
        searchResultList.map((data: CafeInfoType) => {
          return (
            <div
              key={data.id}
              className="flex gap-3 my-6 cursor-pointer"
              onClick={() => router.push(`/cafelist/${data.id}`)}
            >
              <div
                className={`bg-cover bg-center w-[100px] h-[100px] rounded-lg`}
                style={{ backgroundImage: `url(http:${data.imageUrl})` }}
              />
              <div className="w-full flex flex-col py-4 gap-3">
                <header className="flex justify-between">
                  <Text size="large" className="text-black">
                    {data.name}
                  </Text>
                  <div className="flex gap-4">
                    <Icon type="share" size="small" alt="공유하기" />
                    <Icon type="bookmark" size="small" alt="북마크" />
                  </div>
                </header>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <Icon type="star" size="xSmall" alt="star" />
                    <Text size="small" className="text-black">
                      {data.starRating}
                    </Text>
                    <Text size="extraSmall" className="text-gray-700">
                      ({data.reviewCount})
                    </Text>
                  </div>
                  <Text size="extraSmall" className="text-gray-700">
                    {data.roadAddress}
                  </Text>
                </div>
              </div>
            </div>
          );
        })}
      <Button size="full" onClick={() => router.push("/")}>
        홈으로 돌아가기
      </Button>
    </section>
  );
};

export default PlanResultSection;
