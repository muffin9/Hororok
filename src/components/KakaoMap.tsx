"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_APP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 7,
        };
        new window.kakao.maps.Map(mapContainer, options);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" className="w-full h-screen z-[-1]"></div>;
};

export default KakaoMap;
