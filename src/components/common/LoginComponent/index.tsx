import Button from "@/components/common/Button";
import usePlanStore from "@/store/usePlanStore";
import Text from "@/components/common/Text";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Icon from "../Icon";

const LoginComponent = () => {
  const router = useRouter();
  // const show = searchParams.get("show");
  const { setIsWrting } = usePlanStore();
  const kakaoLogin = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_API}&response_type=code`;
    router.push(kakaoURL);
  };

  useEffect(() => {
    setIsWrting(false);
  }, []);

  return (
    <div className="w-[358px] flex flex-col gap-2">
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

      {/* <Link href="?show=true">
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
    </Link> */}

      <Button
        size="full"
        className="enabled:active:bg-white"
        bgColor="bg-bluegray"
        onClick={() => router.push("/map")}
      >
        <Text size="small" className="text-black">
          로그인하지 않고 둘러보기
        </Text>
      </Button>
    </div>
  );
};

export default LoginComponent;
