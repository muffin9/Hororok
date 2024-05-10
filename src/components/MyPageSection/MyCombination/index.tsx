"use client";

import useGetMyCombination from "@/Hooks/Api/myPage/useGetMyCombination";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { CombinationType } from "@/interfaces/Combination";
import { useRouter } from "next/navigation";

const MyCombinationCafe = () => {
  const router = useRouter();
  const { myCombination } = useGetMyCombination();
  return (
    <div className="py-6 px-4">
      <header>
        <Text size="medium" weight="bold">
          자주 찾는 조합
        </Text>
      </header>
      <div className="flex">
        <Icon size="xSmall" type="info" alt="mycombination-info" />
        <Text size="extraSmall" className="text-gray-700">
          나만의 조합에 맞춘 카페를 홈화면에서 빠르게 찾을 수 있어요. 최대 2개
          등록할 수 있으며 선택한 아이콘으로 홈에서 표시돼요.
        </Text>
      </div>
      <div className="flex flex-wrap gap-3">
        {myCombination &&
          myCombination.combinations?.map((combination: CombinationType) => {
            <button
              id={`${combination.id}`}
              className="flex gap-2 justify-between p-3 border-solid border-[1px] border-gray-400 rounded-2xl"
              onClick={() =>
                router.push(`/combination/createEdit/${combination.id}`)
              }
            >
              <Text size="large">{combination.icon}</Text>
              <Text size="small">{combination.name}</Text>
              <Text size="extraSmall" className="text-gray-700">
                수정하기
              </Text>
            </button>;
          })}
      </div>
    </div>
  );
};

export default MyCombinationCafe;
