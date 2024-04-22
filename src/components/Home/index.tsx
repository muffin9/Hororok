"use client";

import { useEffect, Suspense } from "react";
import Splash from "../common/Splash";
import KakaoStaticMap from "../KakaoStaticMap";
import HomeSection from "./HomeSection";
import Loading from "@/app/loading";
import useSplash from "@/store/useSplash";

const Home = () => {
  const { splash, setsplash } = useSplash();

  useEffect(() => {
    const timer = setTimeout(() => {
      setsplash(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!splash ? (
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
