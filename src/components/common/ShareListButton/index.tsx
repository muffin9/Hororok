"use client";

import { useRouter } from "next/navigation";
import { patchSharePlan } from "@/apis/plans";
import { useCallback } from "react";
import useIsLoggedIn from "@/Hooks/useLoggedIn";
import Icon from "@/components/common/Icon";

declare global {
  interface Window {
    Kakao: any;
  }
}

export interface CafeShareListType {
  name: string;
  imageUrl: string;
  id: number;
}

interface ShareListButtonProps {
  type?: string;
  planId?: number;
  title: string;
  cafeList: CafeShareListType[];
}

const ShareListButton = ({
  type,
  planId,
  title,
  cafeList,
}: ShareListButtonProps) => {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  const handleShareToKakao = useCallback(() => {
    const { Kakao } = window;

    Kakao.Share.sendCustom({
      templateId: 112008,
      templateArgs: {
        title: title,
        name1: cafeList[0].name,
        name2: cafeList[1].name,
        name3: cafeList[2].name,
        name4: cafeList[3].name,
        name5: cafeList[4].name,

        imageUrl1: cafeList[0].imageUrl,
        imageUrl2: cafeList[1].imageUrl,
        imageUrl3: cafeList[2].imageUrl,
        imageUrl4: cafeList[3].imageUrl,
        imageUrl5: cafeList[4].imageUrl,

        id1: cafeList[0].id,
        id2: cafeList[1].id,
        id3: cafeList[2].id,
        id4: cafeList[3].id,
        id5: cafeList[4].id,
      },
    });

    if (planId) patchSharePlan(planId);
  }, []);

  const onClickShareListButton = (
    e: React.SyntheticEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    if (isLoggedIn) {
      handleShareToKakao();
    } else {
      alert("로그인이 필요합니다.");
      router.push("/");
    }
  };

  return (
    <button onClick={onClickShareListButton}>
      <Icon
        type={type === "detailInfo" ? "share_white" : "share"}
        size="small"
        alt="공유하기"
      />
    </button>
  );
};

export default ShareListButton;
