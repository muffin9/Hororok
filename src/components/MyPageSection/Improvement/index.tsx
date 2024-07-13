"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import TextArea from "@/components/common/TextArea";

const Improvement = () => {
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col gap-4 overflow-y-scroll">
      <div className="flex flex-col px-4">
        <Text size="x2Large" weight="bold">
          더 좋은 서비스를 만들기 위한
          <br /> 의견을 남겨주세요.
        </Text>
        <TextArea
          placeholder="불편했던 점을 자세히 입력해주시면, 더 좋은 서비스를 만드는 데 큰 도움이 돼요.
          ex. 카페 정보가 적어요. ㅁㅁ카페가 추가되었으면 좋겠어요. / 리뷰가 너무 없어요. / 오류가 자주 생겨요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="h-[290px] mt-8 mb-4"
          maxlength={200}
        />
        <Text size="small" className="ml-auto text-gray-400">
          {content.length}/200
        </Text>
      </div>
      <Button size="full" className="absolute bottom-16">
        의견 보내기
      </Button>
    </div>
  );
};

export default Improvement;
