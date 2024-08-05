import Image from "next/image";
import { logoImage, instagramImage } from "@/app/constants";
import Text from "../common/Text";
import Link from "next/link";

const Introduce = () => {
  return (
    <section className="hidden md:flex flex-col h-full justify-between py-8 gap-2">
      <div className="flex flex-col items-center gap-2">
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
      </div>
      <div className="flex flex-col items-center gap-8">
        <Image
          src={instagramImage}
          width={48}
          height={48}
          alt="instagram image"
        />
        <div className="flex flex-col items-center gap-2">
          <Text size="small" className="text-gray-700">
            이메일: cafecok.seoul@gmail.com
          </Text>
          <div className="flex gap-2">
            <Link
              href="https://www.notion.so/poten-tim-hororok/2193394461cc42e19672307cc208f6f6?pvs=4"
              target="_blank"
            >
              <Text size="small" className="text-gray-700 underline">
                이용약관
              </Text>
            </Link>
            <Link
              href="https://www.notion.so/poten-tim-hororok/1ad4e1fd0d494a9895b117729f0134b7?pvs=4"
              target="_blank"
            >
              <Text size="small" className="text-gray-700 underline">
                위치기반서비스 이용약관
              </Text>
            </Link>
            <Link
              href="https://www.notion.so/poten-tim-hororok/9e46487a97fa44be83cac811f05414e3?pvs=4"
              target="_blank"
            >
              <Text size="small" className="text-gray-700 underline">
                개인정보처리방침
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
