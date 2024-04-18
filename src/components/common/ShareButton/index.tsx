import { useCallback } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareButtonProps {
  cafeId: number;
  children: React.ReactNode;
}

const ShareButton = ({ cafeId, children }: ShareButtonProps) => {
  const handleShareToKakao = useCallback(() => {
    const { Kakao } = window;

    Kakao.Share.sendScrap({
      requestUrl: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cafelist/${cafeId}`,
    });
  }, []);

  const onClickShareButton = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleShareToKakao();
  };

  return <button onClick={onClickShareButton}>{children}</button>;
};

export default ShareButton;
