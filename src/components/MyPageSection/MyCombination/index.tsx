"use client";

import useGetMyCombination from "@/Hooks/Api/myPage/useGetMyCombination";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { CombinationType } from "@/interfaces/Combination";
import { useRouter } from "next/navigation";

const MyCombinationCafe = () => {
  const router = useRouter();
  const { myCombination, myCombinationLoading } = useGetMyCombination();

  return (
    <div className="py-6 px-4">
      <header className="mb-2">
        <Text size="medium" weight="bold">
          자주 찾는 조합
        </Text>
      </header>
      <div className="flex gap-1">
        <Icon size="xSmall" type="info" alt="mycombination-info" />
        <Text size="extraSmall" className="text-gray-700">
          나만의 조합에 맞춘 카페를 홈화면에서 빠르게 찾을 수 있어요. 최대 2개
          등록할 수 있으며 선택한 아이콘으로 홈에서 표시돼요.
        </Text>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {myCombination?.combinations.length > 0 &&
          myCombination.combinations.map((combination: CombinationType) => {
            return (
              <button
                key={combination.icon}
                id={`${combination.id}`}
                className="flex gap-2 justify-between items-center p-3 border-solid border-[1px] border-gray-400 rounded-2xl"
                onClick={() =>
                  router.push(`/combination/createEdit/${combination.id}`)
                }
              >
                <Icon type={combination.icon} alt={combination.icon} />
                <Text size="small">{combination.name}</Text>
                <Text size="extraSmall" className="text-gray-700">
                  수정하기
                </Text>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default MyCombinationCafe;
