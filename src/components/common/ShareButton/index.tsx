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

interface ShareButtonProps {
  type?: string;
  cafeId: number;
  planId?: number;
  cafeInfo: {
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
  };
}

const ShareButton = ({ type, cafeId, planId, cafeInfo }: ShareButtonProps) => {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  const handleShareToKakao = useCallback(() => {
    const { Kakao } = window;

    Kakao.Share.sendCustom({
      templateId: 110854,
      templateArgs: {
        title: cafeInfo.title,
        description: cafeInfo.description,
        cafeId: cafeId,
        imageUrl: `http:${cafeInfo.imageUrl}`,
      },
    });

    if (planId) patchSharePlan(planId);
  }, []);

  const onClickShareButton = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isLoggedIn) {
      handleShareToKakao();
    } else {
      alert("로그인이 필요합니다.");
      router.push("/");
    }
  };

  return (
    <button onClick={onClickShareButton}>
      <Icon
        type={type === "detailInfo" ? "share_white" : "share"}
        size="small"
        alt="공유하기"
      />
    </button>
  );
};

export default ShareButton;
