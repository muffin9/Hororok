import Image from "next/image";
import { reboundButtonImage } from "@/app/constants";

interface ReBoundButtonProps {
  onClickReBound: () => void;
  position: {
    top: string;
    right: string;
    bottom: string;
    left: string;
  };
}

const ReBoundButton = ({ onClickReBound, position }: ReBoundButtonProps) => {
  const { top, right, bottom, left } = position;
  return (
    <button
      className={`absolute ${right} ${top} ${bottom} ${left} z-[1000]`}
      onClick={onClickReBound}
    >
      <Image
        src={reboundButtonImage}
        width={50}
        height={50}
        alt="rebound button"
      />
    </button>
  );
};

export default ReBoundButton;
