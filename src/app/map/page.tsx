"use client";

import HomeSection from "@/components/Home/HomeSection";
import KakaoStaticMap from "@/components/KakaoStaticMap";
import { Suspense } from "react";
import Loading from "../loading";

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<Loading />}>
        <KakaoStaticMap height="h-screen">
          <div className="w-full absolute top-8 z-[999]">
            <HomeSection isInput={true} />
          </div>
        </KakaoStaticMap>
      </Suspense>
    </main>
  );
}
