"use client";

import { Suspense } from "react";
import Splash from "../common/Splash";
import Loading from "@/app/loading";
import LoginComponent from "../common/LoginComponent";
import useIsLoggedIn from "@/Hooks/useLoggedIn";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) router.push("/map");

  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="w-full h-full px-4 flex flex-col items-center justify-center bg-primary-300">
          <Splash />
          <LoginComponent />
        </main>
      </Suspense>
    </>
  );
};

export default Home;
