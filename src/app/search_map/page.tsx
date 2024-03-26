"use client";

import KakaoMap from "@/components/KakaoMap";
import HomeSection from "@/components/Home/HomeSection";

export default function SearchMapPage() {
  return (
    <main className="relative">
      <section>
        <KakaoMap>
          <div className="w-full absolute top-8 z-[999]">
            <HomeSection />
          </div>
        </KakaoMap>
      </section>
    </main>
  );
}
