"use client";

import KakaoMap from "@/components/KakaoMap";
import TopSection from "@/components/Home/TopSection";

export default function SearchMapPage() {
  return (
    <main className="relative">
      <section>
        <KakaoMap>
          <div className="w-full px-4 absolute top-8 z-[999]">
            <TopSection />
          </div>
        </KakaoMap>
      </section>
    </main>
  );
}
