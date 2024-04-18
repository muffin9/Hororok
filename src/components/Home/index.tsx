"use client";

import { useState, useEffect, Suspense } from "react";
import Splash from "../common/Splash";
import KakaoStaticMap from "../KakaoStaticMap";
import HomeSection from "./HomeSection";
import Loading from "@/app/loading";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
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
