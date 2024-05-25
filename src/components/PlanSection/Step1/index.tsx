"use client";

import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import { useRouter } from "next/navigation";

const Step1 = () => {
  const router = useRouter();

  return (
    <div className="px-4 relative flex flex-col gap-8 bg-white">
      <Text size="xLarge" weight="bold">
        어디를 방문하시나요?
      </Text>
      <Input
        type="text"
        placeholder="어디 근처 카페 찾으세요?"
        onClick={() => router.push("/search")}
        className="w-full h-[50px] p-4 bg-white border-[1px] border-gray-400 rounded-lg focus:outline-none shadow-xl"
      />
    </div>
  );
};

export default Step1;
