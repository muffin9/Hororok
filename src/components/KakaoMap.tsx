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

  const [coordinates, setCoordinates] = useState({
    lat: location.latitude,
    lng: location.longitude,
  });

  const [markers, setMarkers] = useState([]);
  const mapRef = useRef<HTMLElement | null>(null);

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

    setCoordinates({ lat: place.latitude, lng: place.longitude });
    marker.setMap(mapRef.current);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_APP_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const imageSize = new window.kakao.maps.Size(24, 24);
        const markerImage = new window.kakao.maps.MarkerImage(
          "/assets/Images/ico_marker.png",
          imageSize
        );

        const mapContainer = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            coordinates.lat,
            coordinates.lng
          ),
          level: 7,
        };
        mapRef.current = new window.kakao.maps.Map(mapContainer, options);

        const myMarkerPosition = new window.kakao.maps.LatLng(
          coordinates.lat,
          coordinates.lng
        );

        const marker = new window.kakao.maps.Marker({
          position: myMarkerPosition,
          image: markerImage,
        });

        marker.setMap(mapRef.current);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [coordinates.lat, coordinates.lng]);

  useEffect(() => {
    const placeInfo = params.values().next().value;

    if (window.kakao && placeInfo) {
      if (markers) {
        markers.forEach((marker: any) => marker.setMap(null));
      }

      displayPlaces(JSON.parse(placeInfo));
    }
  }, [params]);

  return (
    <div id="map" className="w-full h-screen">
      {children}
    </div>
  );
};

export default KakaoMap;
