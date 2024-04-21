import Image from "next/image";
import Text from "@/components/common/Text";

const Splash = () => {
  return (
    <div className="flex flex-col items-center">
      <Text size="x2Large" className="text-white">
        원하는 카페만 골라주는
      </Text>
      <div className="flex items-center mt-[-5px]">
        <Text size="extraLarge" weight="bold" className="text-white">
          카페콕
        </Text>
        <Image
          src={"/assets/Images/logo.png"}
          width={75}
          height={75}
          alt="logo image"
        />
      </div>
    </div>
  );
};

export default Splash;
