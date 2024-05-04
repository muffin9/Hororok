"use client";

import { LoginType } from "@/interfaces/Login";
import useUserInfoStore from "@/store/useUserInfo";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function KakaoCallback() {
  const router = useRouter();

  const [code, setCode] = useState<string | null>(null);
  const { setUserInfo } = useUserInfoStore();

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("code")) {
      setCode(searchParams.get("code"));
    }
  }, [searchParams]);

  useEffect(() => {
    if (code) {
      axios
        .get(`https://api.hororok.o-r.kr/api/auth/login?code=${code}`)
        .then(({ data }: { data: LoginType }) => {
          const { accessToken, refreshToken } = data;
          const currentTime = new Date().getTime();
          const expirationTime = currentTime + 6 * 60 * 60 * 1000;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem(
            "accessTokenExpiration",
            expirationTime.toString()
          );
          localStorage.setItem("refreshToken", refreshToken);

          router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [code, router, setUserInfo]);

  return <></>;
}
