import { useCallback } from "react";
import Icon from "../Icon";

declare global {
  interface Window {
    Kakao: any;
  }
}

const ShareButton = () => {
  const handleShareToKakao = useCallback(() => {
    const { Kakao, location } = window;
    Kakao.Share.sendScrap({
      redirectUrl: location.href,
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
