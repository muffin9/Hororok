"use client";

import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import { useRouter } from "next/navigation";

const SecessionStep1 = () => {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col">
      <Text size="x2Large" weight="bold">
        카페콕을 탈퇴하신다니 아쉬워요.
      </Text>
      <Text size="small" className="text-gray-800">
        회원 탈퇴를 원하신다니 카페콕의 서비스가 부족했나봐요. <br />
        불편하셨던 점을 알려주시면 <br />
        적극 반영해서 해결하도록 노력할게요.
      </Text>
      <div className="mt-8">
        <Text size="medium">회원 탈퇴 시 유의사항</Text>
        <div className="mt-3 border-b-[1px] border-solid border-gray-300 rounded-lg">
          <ul>
            <li>저장하고 공유했던 소중한 기록이 모두 사라져요.</li>
            <li>나만의 취향이 깃든 카페 리뷰들이 모두 사라져요.</li>
            <li>
              회원 탈퇴 시, 서비스 이용기록은 통신비밀보호법에따라 3개월간
              분리보관된 후 영구 삭제돼요.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-auto">
        <Button size="half" onClick={() => router.back()}>
          <Text size="large">계속 사용하기</Text>
        </Button>
        <Button size="half" bgColor="bg-gray-300">
          <Text size="large" className="text-gray-700">
            탈퇴하기
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default SecessionStep1;
