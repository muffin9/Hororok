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
    const { Kakao, location } = window;

    Kakao.Share.sendScrap({
      requestUrl: `/cafelist/${cafeId}`,
    });
  }, []);

  const onClickShareButton = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleShareToKakao();
  };
  return (
    <button className="z-[1000]" onClick={onClickShareButton}>
      <Icon type="share" size="small" alt="공유하기" />
    </button>
  );
};

export default ShareButton;
