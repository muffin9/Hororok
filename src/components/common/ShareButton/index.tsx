import { useCallback } from "react";
import Icon from "../Icon";

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareButtonProps {
  cafeId: number;
}

const ShareButton = ({ cafeId }: ShareButtonProps) => {
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
  
  return (
    <button onClick={onClickShareButton}>
      <Icon type="share" size="small" alt="공유하기" />
    </button>
  );
};

export default ShareButton;
