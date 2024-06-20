"use client";

import useGeolocation from "@/Hooks/useGeolocation";
import { useEffect, useRef } from "react";
import ReBoundButton from "./common/ReBoundButton";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoStaticMapProps {
  children?: React.ReactNode;
  height: string;
}

const KakaoStaticMap = ({ children, height }: KakaoStaticMapProps) => {
  const location = useGeolocation();
  const kakaoMapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_APP_KEY}&libraries=services&autoload=false`;
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
            location.latitude,
            location.longitude
          ),
          level: 5,
        };
        kakaoMapRef.current = new window.kakao.maps.Map(container, options);

        const myMarkerPosition = new window.kakao.maps.LatLng(
          location.latitude,
          location.longitude
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
  }, [location.latitude, location.longitude]);

  const onClickReBound = () => {
    const moveLatLon = new window.kakao.maps.LatLng(
      location.latitude,
      location.longitude
    );
    kakaoMapRef.current.panTo(moveLatLon);
  };

  return (
    <div className={`relative w-full ${height} rounded-lg`} id="static_map">
      {children}
      <ReBoundButton
        onClickReBound={onClickReBound}
        position={{
          top: "",
          right: "right-[10px]",
          bottom: "bottom-[80px]",
          left: "",
        }}
      />
    </div>
  );
};

export default KakaoStaticMap;
