"use client";

import { useEffect, useRef, useState } from "react";
import { cafePinImage, currentPinImage } from "@/app/constants";
import useGeolocation from "@/Hooks/useGeolocation";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";
import { CafeInfoType } from "@/interfaces/Cafe";
import { useSearchParams } from "next/navigation";
import useCoordinatesStore from "@/store/useCoordinatesStore";
import ReBoundButton from "./common/ReBoundButton";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  children: React.ReactNode;
}

const KakaoMap = ({ children }: KakaoMapProps) => {
  const { searchResultList } = useSearcResultListStorehPlace();
  const { setCoordinates } = useCoordinatesStore();

  const params = useSearchParams();
  const location = useGeolocation();

  const mapRef = useRef<HTMLDivElement | null | any>(null);
  const [currentCoordinates, setCurrentCoordinates] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
  });

  const displayPlaces = (latitude: number, longitude: number) => {
    const imageSize = new window.kakao.maps.Size(24, 35);
    const markerImage = new window.kakao.maps.MarkerImage(
      currentPinImage,
      imageSize
    );

    const myMarkerPosition = new window.kakao.maps.LatLng(latitude, longitude);

    const marker = new window.kakao.maps.Marker({
      position: myMarkerPosition,
      image: markerImage,
    });

    setCurrentCoordinates({
      latitude,
      longitude,
    });
    marker.setMap(mapRef.current);

    // searchResultList 핀 꽂기
    const newMarkers = [] as any;
    const cafeMarkerSize = new window.kakao.maps.Size(34, 34);
    const cafeMarkerImage = new window.kakao.maps.MarkerImage(
      cafePinImage,
      cafeMarkerSize
    );

    if (searchResultList) {
      searchResultList.forEach((cafe: CafeInfoType) => {
        const marker = new window.kakao.maps.Marker({
          map: mapRef.current,
          position: new window.kakao.maps.LatLng(cafe.latitude, cafe.longitude),
          image: cafeMarkerImage,
          zIndex: 10,
        });

        newMarkers.push(marker);
      });

      newMarkers.forEach((marker: any) => marker.setMap(mapRef.current));
    }
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
            currentCoordinates.latitude,
            currentCoordinates.longitude
          ),
          level: 5,
        };

        mapRef.current = new window.kakao.maps.Map(mapContainer, options);

        if (window.kakao) {
          window.kakao.maps.event.addListener(
            mapRef.current,
            "dragend",
            function () {
              const center = mapRef.current?.getCenter(); // 지도의 중심 좌표 가져오기

              if (center) {
                setCoordinates(center.getLat(), center.getLng());
              }
            }
          );
        }

        const latitude = params.get("latitude");
        const longitude = params.get("longitude");
        if (window.kakao && latitude && longitude) {
          displayPlaces(+latitude, +longitude);
        }
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [currentCoordinates.latitude, currentCoordinates.longitude, params]);

  const onClickReBound = () => {
    const moveLatLon = new window.kakao.maps.LatLng(
      location.latitude,
      location.longitude
    );
    mapRef.current.panTo(moveLatLon);
  };

  return (
    <div id="map" className="fixed top-0 w-[390px] h-2/4">
      {children}
      <ReBoundButton
        onClickReBound={onClickReBound}
        position={{
          top: "",
          right: "right-[10px]",
          bottom: "bottom-[10px]",
          left: "",
        }}
      />
    </div>
  );
};

export default KakaoMap;
