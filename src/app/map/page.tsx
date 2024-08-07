import KakaoStaticMap from "@/components/KakaoStaticMap";
import HomeSection from "@/components/Home/HomeSection";

export default function MapPage() {
  return (
    <KakaoStaticMap height="h-screen">
      <HomeSection />
    </KakaoStaticMap>
  );
}
