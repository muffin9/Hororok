"use client";

import { SearchPlaceInfoType } from "@/interfaces/SearchPlace";
import { useEffect, useRef, useState } from "react";
import { defaultCoords, pinImage } from "@/app/constants";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  children: React.ReactNode;
}

const KakaoMap = ({ children }: KakaoMapProps) => {
  const params = useSearchParams();

  const [markers, setMarkers] = useState([]);
  const mapRef = useRef<HTMLElement | null>(null);

  const displayPlaces = (places: SearchPlaceInfoType[]) => {
    const imageSize = new window.kakao.maps.Size(24, 35);
    const markerImage = new window.kakao.maps.MarkerImage(pinImage, imageSize);
    const newMarkers = [] as any;

    places.forEach((place: SearchPlaceInfoType) => {
      const marker = new window.kakao.maps.Marker({
        map: mapRef.current,
        position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
        image: markerImage,
        zIndex: 10,
      });

      newMarkers.push(marker);
    });
    setMarkers(newMarkers);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_APP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            defaultCoords.lat,
            defaultCoords.lng
          ),
          level: 7,
        };
        mapRef.current = new window.kakao.maps.Map(mapContainer, options);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const placeInfos = [] as SearchPlaceInfoType[];

    for (const value of params.values()) {
      placeInfos.push(JSON.parse(value));
    }

    if (window.kakao && placeInfos && placeInfos.length > 0) {
      if (markers) {
        markers.forEach((marker: any) => marker.setMap(null));
      }
      displayPlaces(placeInfos);
    }
  }, []);

  return (
    <div id="map" className="w-full h-screen">
      {children}
    </div>
  );
};

export default KakaoMap;
