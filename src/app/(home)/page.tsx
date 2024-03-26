"use client";

import HomeSection from "@/components/Home/HomeSection";
import KakaoMap from "@/components/KakaoMap";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <KakaoMap>
          <div className="w-full absolute top-8 z-[999]">
            <HomeSection />
          </div>
        </KakaoMap>
      </Suspense>
    </main>
  );
}
