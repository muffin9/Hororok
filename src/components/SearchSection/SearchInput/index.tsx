"use client";

import Input from "@/components/common/Input";
import { Dispatch, SetStateAction, useState } from "react";
import Icon from "@/components/common/Icon";
import { defaultCoords } from "@/app/constants";
import { SearchPlaceInfoType, SearchPlaceType } from "@/interfaces/SearchPlace";
import BackButton from "@/components/common/BackButton";

declare global {
  interface Window {
    kakao: any;
  }
}

interface SearchInputProps {
  setOnRecentSearch: Dispatch<SetStateAction<boolean>>;
  setResultSearchInfo: Dispatch<SetStateAction<SearchPlaceInfoType[]>>;
}

const SearchInput = ({
  setOnRecentSearch,
  setResultSearchInfo,
}: SearchInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const placesSearchCallBack = (data: SearchPlaceType[], status: string) => {
    if (status === window.kakao.maps.services.Status.OK) {
      const searchPlaceInfos = data.map((place: SearchPlaceType) => ({
        place_id: +place.id,
        place_name: place.place_name,
        address: place.address_name,
        latitude: +place.y,
        longitude: +place.x,
        detail_link: place.place_url,
      }));

      setResultSearchInfo(searchPlaceInfos);
    }
    if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      // 검색 결과가 존재하지 않습니다.
      setResultSearchInfo([]);
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      // 검색 결과 중 오류가 발생했습니다.
    }
  };

  const searchAddressToCoordinate = (address: string) => {
    if (window.kakao) {
      const kakaoSearchService = new window.kakao.maps.services.Places();
      kakaoSearchService.keywordSearch(address, placesSearchCallBack, {
        location: new window.kakao.maps.LatLng(
          defaultCoords.lng,
          defaultCoords.lat
        ),
      });
    }
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleSubmit = () => {
    if (inputValue === "") return;

    searchAddressToCoordinate(inputValue);
    setOnRecentSearch(false);
  };

  const handleKeyUpSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, target } = e;

    if (key === "Enter" && target instanceof HTMLInputElement) {
      setInputValue(target.value);
      (document.activeElement as HTMLElement).blur();
      handleSubmit();
    }
  };

  return (
    <div className="w-full h-[50px] flex relative">
      <div className="h-6 absolute top-1/2 transform -translate-y-1/2">
        <BackButton />
      </div>
      <Input
        type="text"
        value={inputValue}
        placeholder="텍스트 필드"
        onChange={handleChange}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyUpSearchInput(e)
        }
      />
      {inputValue && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
          onClick={handleClear}
        >
          <Icon type="close" alt="close" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
