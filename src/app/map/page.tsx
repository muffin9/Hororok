import { Suspense } from "react";

import Loading from "@/app/loading";
import KakaoStaticMap from "@/components/KakaoStaticMap";
import HomeSection from "@/components/Home/HomeSection";

export default function MapPage() {
  return (
    <Suspense fallback={<Loading />}>
      <KakaoStaticMap height="h-screen">
        <HomeSection />
      </KakaoStaticMap>
    </Suspense>
  );
}
