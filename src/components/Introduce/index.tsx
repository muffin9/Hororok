import Image from "next/image";
import {
  mainLogoImage,
  cafecokTextImage,
  instagramImage,
  introduceTooltipImage,
} from "@/app/constants";
import Text from "../common/Text";
import Link from "next/link";

const Introduce = () => {
  return (
    <section className="hidden md:flex flex-col h-full py-8 gap-2 mr-[180px]">
      <div className="h-full relative justify-center flex flex-col items-center gap-2">
        <Image
          src={introduceTooltipImage}
          width={238}
          height={75}
          alt="tooltip image"
        />
        <div className="flex gap-4 items-center">
          <Image
            src={mainLogoImage}
            width={131}
            height={131}
            alt="cafecok logo"
            className="rounded-lg"
          />
          <Image
            src={cafecokTextImage}
            width={156}
            height={72}
            alt="cafecok text"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full ml-3 flex gap-[26px]">
            <div className="flex gap-2">
              <Text size="extraSmall" className="text-primary-300">
                &#183;
              </Text>
              <Text size="extraSmall" className="text-primary-300">
                &#183;
              </Text>
            </div>
            <div className="flex gap-2">
              <Text size="extraSmall" className="text-primary-300">
                &#183;
              </Text>
              <Text size="extraSmall" className="text-primary-300">
                &#183;
              </Text>
            </div>
          </div>
          <div>
            <Text size="small" className="text-primary-300">
              일정
            </Text>
            <Text size="small">과 </Text>
            <Text size="small" className="text-primary-300">
              취향
            </Text>
            <Text size="small">에 딱 맞춘 카페 찾기</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Link
          href="https://www.instagram.com/cafecok_seoul/?igsh=eDZhcWpuejFxYzc2&utm_source=qr"
          target="_blank"
        >
          <Image
            src={instagramImage}
            width={48}
            height={48}
            alt="instagram image"
          />
        </Link>
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
