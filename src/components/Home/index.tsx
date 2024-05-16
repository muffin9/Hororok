"use client";

import { useEffect, Suspense } from "react";
import Splash from "../common/Splash";
import Loading from "@/app/loading";
import useSplashState from "@/store/useSplash";
import LoginComponent from "../common/LoginComponent";

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
          <main className="w-full h-full px-4 flex flex-col items-center justify-center bg-primary-300">
            <Splash />
            <LoginComponent />
          </main>
        </Suspense>
      )}
    </>
  );
};

export default Home;
