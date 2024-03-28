import { SearchPlaceType } from "@/interfaces/SearchPlace";
import useSearchHistory from "@/store/searchHistory";
import useSearchInput from "@/store/searchInput";
import useSearchPlace from "@/store/searchPlace";
import useGeolocation from "./useGeolocation";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    kakao: any;
  }
}

const useHandleKeySearchInput = () => {
  const location = useGeolocation();
  const router = useRouter();
  const { setResultSearchInfo } = useSearchPlace();
  const { searchInputValue, setSearchInputValue } = useSearchInput();
  const { addSearch } = useSearchHistory();

  const placesSearchCallBack = (data: SearchPlaceType[], status: string) => {
    if (status === window.kakao.maps.services.Status.OK) {
      const searchPlaceInfos = data.map((place: SearchPlaceType) => ({
        place_id: +place.id,
        place_name: place.place_name,
        address: place.address_name,
        latitude: +place.y,
        longitude: +place.x,
        detail_link: place.place_url,
        distance: (+place.distance / 1000).toFixed(1),
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
          location.latitude,
          location.longitude
        ),
      });
    }
  };

  const handleSubmit = () => {
    if (searchInputValue === "") return;

    searchAddressToCoordinate(searchInputValue);
    router.push("/search/result");
  };

  const handleKeyUpSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, target } = e;

    if (key === "Enter" && target instanceof HTMLInputElement) {
      setSearchInputValue(target.value);
      addSearch(target.value);
      (document.activeElement as HTMLElement).blur();
      handleSubmit();
    }
  };

  return { searchAddressToCoordinate, handleKeyUpSearchInput };
};

export default useHandleKeySearchInput;
