"use client";

import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import Modal from "@/components/common/Modal";
import Text from "@/components/common/Text";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const show = searchParams.get("show");

  const kakaoLogin = () => {
    const kakao = (window as any).Kakao;

    kakao.Auth.authorize({
      redirectUri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_API}`,
    });
  };

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
        <Button
          size="full"
          bgColor="bg-kakao"
          className="px-6 relative enabled:active:bg-kakao"
          onClick={kakaoLogin}
        >
          <div className="absolute left-4">
            <Icon type="kakao" size="xSmall" alt="kakao image" />
          </div>
          <Text size="small" className="text-black">
            카카오로 계속하기
          </Text>
        </Button>

        <Link href="?show=true">
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
        <Link href="?show=true">
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
        <Link href="?show=true">
          <Button
            size="full"
            className="px-6 relative enabled:active:bg-black"
            bgColor={"bg-black"}
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
      {show && (
        <Modal
          title={`현재 KAKAO 로그인만 지원해요.\n 로그인하지 않고 둘러볼수도 있어요.`}
          okButtonText="확인"
          okCallbackFunc={() => {
            router.back();
          }}
        />
      )}
    </main>
  );
}
