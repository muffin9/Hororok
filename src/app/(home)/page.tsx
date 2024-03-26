"use client";

import HomeSection from "@/components/Home/HomeSection";
import KakaoMap from "@/components/KakaoMap";

export default function Home() {
  return (
    <main className="relative">
      <KakaoMap>
        <div className="w-full absolute top-8 z-[999]">
          <HomeSection />
        </div>
      </KakaoMap>
    </main>
  );
}
