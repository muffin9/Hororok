import Image from "next/image";
import { logoImage } from "@/app/constants";
import Text from "../common/Text";

const Introduce = () => {
  return (
    <section className="hidden md:flex flex-col justify-center items-center gap-2">
      <Image
        src={logoImage}
        width={142}
        height={142}
        alt="cafekok logo"
        className="rounded-lg"
      />
      <div>
        <Text size="small">일정과 취향에 딱 맞춘 </Text>
        <Text size="small" className="text-primary-300">
          카페콕
        </Text>
      </div>
    </section>
  );
};

export default Introduce;
