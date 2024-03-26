"use client";

import TopSection from "@/components/Home/TopSection";
import KakaoMap from "@/components/KakaoMap";

import GNB from "@/components/common/GNB";
import { defaultCoords } from "../constants";

export default function Home() {
  return (
    <main className="relative">
      <KakaoMap>
        <div className="w-full px-4 absolute top-8 z-[999]">
          <TopSection />
        </div>
        <GNB />
      </KakaoMap>
    </main>
  );
}
