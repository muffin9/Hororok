"use client";

import { useRouter } from "next/navigation";
import { patchSharePlan } from "@/apis/plans";
import { useCallback, useState } from "react";
import useIsLoggedIn from "@/Hooks/useLoggedIn";
import Icon from "../Icon";

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareButtonProps {
  cafeId: number;
  planId?: number;
}

const ShareButton = ({ cafeId, planId }: ShareButtonProps) => {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleShareToKakao = useCallback(() => {
    const { Kakao } = window;

    Kakao.Share.sendScrap({
      requestUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cafe/${cafeId}`,
    });
    if (planId) patchSharePlan(planId);
  }, []);

  const onClickShareButton = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isLoggedIn) {
      setIsClicked(true);
      handleShareToKakao();
      setTimeout(() => {
        setIsClicked(false);
      }, 200);
    } else {
      alert("로그인이 필요합니다.");
      router.push("/");
    }
  };

  return (
    <button onClick={onClickShareButton}>
      <Icon
        type={isClicked ? "share" : "share_hover"}
        size="small"
        alt="공유하기"
      />
    </button>
  );
};

export default ShareButton;
