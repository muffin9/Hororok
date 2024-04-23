"use client";

import { useEffect, Suspense } from "react";
import Splash from "../common/Splash";
import KakaoStaticMap from "../KakaoStaticMap";
import HomeSection from "./HomeSection";
import Loading from "@/app/loading";
import useSplashState from "@/store/useSplash";

const Home = () => {
  const { showSplash, setShowSplash } = useSplashState();

  useEffect(() => {
    setShowSplash(true);
  }, []);

  return (
    <>
      {!showSplash ? (
        <main className="w-full h-full px-4 flex flex-col items-center justify-center bg-primary-300">
          <Splash />
        </main>
      ) : (
        <Suspense fallback={<Loading />}>
          <KakaoStaticMap height="h-screen">
            <HomeSection />
          </KakaoStaticMap>
        </Suspense>
      )}
    </>
  );
};

export default Home;
