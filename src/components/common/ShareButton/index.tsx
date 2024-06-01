import { patchSharePlan } from "@/apis/plans";
import { useCallback } from "react";
import useIsLoggedIn from "@/Hooks/useLoggedIn";
import { Router } from "next/router";

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareButtonProps {
  cafeId: number;
  planId?: number;
  children: React.ReactNode;
}

const ShareButton = ({ cafeId, planId, children }: ShareButtonProps) => {
  const isLoggedIn = useIsLoggedIn();

  const handleShareToKakao = useCallback(() => {
    const { Kakao } = window;

    Kakao.Share.sendScrap({
      requestUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cafe/${cafeId}`,
    });
    if (planId) patchSharePlan(planId);
  }, []);

  const onClickShareButton = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isLoggedIn) handleShareToKakao();
    else {
      alert("로그인이 필요합니다.");
    }
  };

  return <button onClick={onClickShareButton}>{children}</button>;
};

export default ShareButton;
