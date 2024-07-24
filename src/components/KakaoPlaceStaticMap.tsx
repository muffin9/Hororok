"use client";

import useGeolocation from "@/Hooks/useGeolocation";
import usePlanStore from "@/store/usePlanStore";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoPlaceStaticMapProps {
  children?: React.ReactNode;
  height: string;
}

const KakaoPlaceStaticMap = ({
  children,
  height,
}: KakaoPlaceStaticMapProps) => {
  const location = useGeolocation();
  const { formData } = usePlanStore();
  const kakaoMapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const imageSize = new window.kakao.maps.Size(24, 24);
        const markerImage = new window.kakao.maps.MarkerImage(
          "/assets/Images/my_position.png",
          imageSize
        );

        const container = document.getElementById("static_map");

        const options = {
          center: new window.kakao.maps.LatLng(
            formData.latitude || location.latitude,
            formData.longitude || location.longitude
          ),
          level: 5,
        };
        kakaoMapRef.current = new window.kakao.maps.Map(container, options);

        const myMarkerPosition = new window.kakao.maps.LatLng(
          formData.latitude || location.latitude,
          formData.longitude || location.longitude
        );

        const marker = new window.kakao.maps.Marker({
          position: myMarkerPosition,
          image: markerImage,
        });

        marker.setMap(kakaoMapRef.current);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [formData.latitude, formData.longitude]);

  return (
    <div className={`w-full ${height} rounded-lg`} id="static_map">
      {children}
    </div>
  );
};

export default KakaoPlaceStaticMap;
