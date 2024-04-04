"use client";

import { useTokenCookies } from "@/Hooks/useTokenCookies";
import { LoginType } from "@/interfaces/Login";
import useUserInfoStore from "@/store/useUserInfo";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function KakaoCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { setAccessToken } = useTokenCookies();
  const { setUserInfo } = useUserInfoStore();

  useEffect(() => {
    if (code) {
      axios
        .get(`https://api.hororok.o-r.kr/auth/kakao/login?code=${code}`)
        .then(({ data }: { data: LoginType }) => {
          const { account, accessToken } = data;
          setUserInfo(account);
          setAccessToken(accessToken);
          router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return <></>;
}
