"use client";

import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

const ReSearchButton = () => {
  return (
    <button
      className="h-[38px] px-2 flex items-center gap-[4px] m-auto bg-white rounded-lg"
      onClick={() => alert("서비스 준비중입니다...")}
    >
      <Icon size="small" type="refresh" alt="refresh" />
      <Text size="small" className="text-primary-300">
        이 지역에서 재검색
      </Text>
    </button>
  );
};

export default ReSearchButton;
