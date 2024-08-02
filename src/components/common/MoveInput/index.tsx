"use client";

import { useRouter } from "next/navigation";
import Input from "../Input";
import Icon from "../Icon";

const MoveInput = () => {
  const router = useRouter();
  return (
    <div className="w-full flex relative">
      <Input
        type="text"
        placeholder="어디 근처 카페 찾으세요? (ex. 망원역)"
        onClick={() => router.push("/search")}
        className="w-full h-[50px] px-10 bg-white border-[1xps] border-gray-400 rounded-lg focus:outline-none"
      />
      <button
        className="absolute right-4 top-0 transform translate-y-1/2 cursor-pointer"
        onClick={() => router.push("/map")}
      >
        <Icon type="close" size="small" alt="close" />
      </button>
    </div>
  );
};

export default MoveInput;
