import { patchSharePlan } from "@/apis/plans";
import { useCallback } from "react";

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
  const handleShareToKakao = useCallback(() => {
    const { Kakao } = window;

    Kakao.Share.sendScrap({
      requestUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cafe/${cafeId}`,
    });
    if (planId) patchSharePlan(planId);
  }, []);

  const onClickShareButton = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleShareToKakao();
  };

  return <button onClick={onClickShareButton}>{children}</button>;
};

export default ShareButton;
