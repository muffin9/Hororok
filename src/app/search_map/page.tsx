"use client";

import KakaoMap from "@/components/KakaoMap";
import HomeSection from "@/components/Home/HomeSection";
import { Suspense } from "react";

export default function SearchMapPage() {
  return (
    <main className="relative">
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <KakaoMap>
            <div className="w-full absolute top-8 z-[999]">
              <HomeSection />
            </div>
          </KakaoMap>
        </Suspense>
      </section>
    </main>
  );
}
