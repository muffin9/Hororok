"use client";

import { SearchPlaceInfoType } from "@/interfaces/SearchPlace";
import { useEffect, useRef, useState } from "react";
import { pinImage } from "@/app/constants";
import { useSearchParams } from "next/navigation";
import useGeolocation from "@/Hooks/useGeolocation";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  children: React.ReactNode;
}

const KakaoMap = ({ children }: KakaoMapProps) => {
  const location = useGeolocation();
  const params = useSearchParams();
  const mapRef = useRef<HTMLElement | null>(null);
  const [currentCoordinates, setCurrentCoordinates] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
  });

  const displayPlaces = (place: SearchPlaceInfoType) => {
    const imageSize = new window.kakao.maps.Size(24, 35);
    const markerImage = new window.kakao.maps.MarkerImage(pinImage, imageSize);

    const myMarkerPosition = new window.kakao.maps.LatLng(
      place.latitude,
      place.longitude
    );

    const marker = new window.kakao.maps.Marker({
      position: myMarkerPosition,
      image: markerImage,
    });

    setCurrentCoordinates({
      latitude: place.latitude,
      longitude: place.longitude,
    });
    marker.setMap(mapRef.current);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_APP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const placeInfo = params.values().next().value;
        const mapContainer = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(
            currentCoordinates.latitude,
            currentCoordinates.longitude
          ),
          level: 5,
        };

        mapRef.current = new window.kakao.maps.Map(mapContainer, options);

        if (window.kakao && placeInfo) {
          displayPlaces(JSON.parse(placeInfo));
        }
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [currentCoordinates.latitude, currentCoordinates.longitude, params]);

  return (
    <div id="map" className="w-full h-screen">
      {children}
    </div>
  );
};

export default KakaoMap;
