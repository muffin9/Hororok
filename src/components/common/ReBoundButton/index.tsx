import Image from "next/image";
import { reboundButtonImage } from "@/app/constants";

interface ReBoundButtonProps {
  onClickReBound: () => void;
}

const ReBoundButton = ({ onClickReBound }: ReBoundButtonProps) => {
  return (
    <button
      className="absolute right-[10px] bottom-[10px] z-[1000]"
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
