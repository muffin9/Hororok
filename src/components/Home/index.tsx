"use client";

import { Suspense, useEffect } from "react";
import Splash from "../common/Splash";
import Loading from "@/app/loading";
import useIsLoggedIn from "@/Hooks/useLoggedIn";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit");
    const loginHistory = localStorage.getItem("loginHistory");

    if (!isFirstVisit || !loginHistory) {
      localStorage.setItem("isFirstVisit", "false");
      router.push("/onboarding");
    } else if (isLoggedIn) {
      router.push("/  ");
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="w-full h-full px-4 flex flex-col items-center justify-center bg-primary-300">
          <Splash />
        </main>
      </Suspense>
    </>
  );
};

export default Home;
