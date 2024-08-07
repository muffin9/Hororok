"use client";

import { useEffect } from "react";
import Splash from "../common/Splash";
import useIsLoggedIn from "@/Hooks/useLoggedIn";
import { useRouter } from "next/navigation";
import axios from "axios";

const Home = () => {
  const router = useRouter();

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit");
    const loginHistory = localStorage.getItem("loginHistory");

    if (!isFirstVisit || !loginHistory) {
      localStorage.setItem("isFirstVisit", "false");
      router.push("/onboarding");
      return;
    }

    if (isLoggedIn) {
      router.push("/map");
      return;
    }

    const checkVisitAndVersion = async () => {
      try {
        const { data } = await axios.get("/api/version");
        const currentVersion = localStorage.getItem("appVersion");

        if (currentVersion !== data.version) {
          // 버전이 다를 경우 로컬스토리지 삭제
          localStorage.clear();
          localStorage.setItem("appVersion", data.version);
        }
      } catch (error) {
        console.error("버전 체크에 실패했습니다.", error);
      }
    };

    checkVisitAndVersion();
  }, [isLoggedIn, router]);

  return (
    <>
      <main className="w-full h-full px-4 flex flex-col items-center justify-center bg-primary-300">
        <Splash />
      </main>
    </>
  );
};

export default Home;
