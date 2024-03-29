import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="w-full h-full px-4 flex flex-col items-center justify-center bg-white">
      <div className="text-center">
        <Image
          src={"/assets/Images/logo.png"}
          width={190}
          height={190}
          alt="logo image"
        />
        <Text size="extraLarge" weight="bold" className="text-primary-300">
          호로록
        </Text>
      </div>
      <div className="w-full flex flex-col gap-2 pt-[100px]">
        <Link href="/map">
          <Button
            size="full"
            bgColor="bg-kakao"
            className="px-6 relative enabled:active:bg-kakao"
          >
            <div className="absolute left-4">
              <Icon type="kakao" size="xSmall" alt="kakao image" />
            </div>
            <Text size="small" className="text-black">
              카카오로 계속하기
            </Text>
          </Button>
        </Link>
        <Link href="/map">
          <Button
            size="full"
            bgColor="bg-naver"
            className="px-6 relative enabled:active:bg-naver"
          >
            <div className="absolute left-4">
              <Icon type="naver" size="xSmall" alt="kakao image" />
            </div>
            <Text size="small" className="text-white">
              네이버로 계속하기
            </Text>
          </Button>
        </Link>
        <Link href="/map">
          <Button
            size="full"
            className="bg-white px-6 relative enabled:active:bg-naver"
          >
            <div className="absolute left-4">
              <Icon type="google" size="xSmall" alt="kakao image" />
            </div>
            <Text size="small" className="text-black">
              Google로 계속하기
            </Text>
          </Button>
        </Link>
        <Link href="/map">
          <Button
            size="full"
            className="bg-black px-6 relative enabled:active:bg-naver"
          >
            <div className="absolute left-4">
              <Icon type="apple" size="xSmall" alt="kakao image" />
            </div>
            <Text size="small" className="text-white">
              Apple로 계속하기
            </Text>
          </Button>
        </Link>
        <Link href="/map">
          <Button size="full" className="bg-white enabled:active:bg-white">
            <Text size="small" className="text-gray-700">
              로그인하지 않고 둘러보기
            </Text>
          </Button>
        </Link>
      </div>
    </main>
  );
}
