"use client";

import Text from "@/components/common/Text";
import useSearchPlace from "@/store/searchPlace";
import { useRouter } from "next/navigation";
import SearchInput from "../SearchInput";

import useHandleKeySearchInput from "@/Hooks/useHandleKeySearchInput";
import usePlanStore from "@/store/usePlanStore";
import { getSearchList } from "@/apis/search";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";

const SearchResultSection = () => {
  const { resultSearchInfo } = useSearchPlace();
  const router = useRouter();
  const { handleKeyUpSearchInput } = useHandleKeySearchInput();
  const { formData, isWriting, setFormData } = usePlanStore();

  const { setSearchResultList } = useSearcResultListStorehPlace();

  const onClickPlace = async (place_id: number) => {
    // SearchResultSection 컴포넌트 에게 해당 아이템 onclick시 지도 업데이트 되는 로직 보내줘야한다.
    // router push searchMap?
    // 이 Place_id 주변 카페를 서버로부터 가져와서 findPlace와 zustand에 저장할 필요가 있어보임. 우선 임시로 이 데이터만 뿌려주자.
    // 클라이언트 zustand에 저장해버리면 파라미터에 안담아도 된다!
    const findPlace = resultSearchInfo.find(
      (searchInfo) => searchInfo.place_id === place_id
    );

    if (findPlace) {
      const { latitude, longitude } = findPlace;
      const cafeSearchList = await getSearchList(latitude, longitude);

      setSearchResultList(cafeSearchList);

      if (isWriting) {
        setFormData({
          ...formData,
          latitude: findPlace.latitude,
          longitude: findPlace.longitude,
        });

        router.push("/plan/2");
      } else {
        const path = `/search_map?latitude=${findPlace.latitude}&longitude=${findPlace.longitude}`;
        router.push(path);
      }
    }
  };

  return (
    <section className="py-8 bg-white">
      <SearchInput handleKeyUpSearchInput={handleKeyUpSearchInput} />
      {resultSearchInfo.map((data) => {
        return (
          <div
            key={data.place_id}
            className="w-full h-20 flex justify-between items-center border-b-[1px] border-silver cursor-pointer"
            onClick={() => onClickPlace(data.place_id)}
          >
            <div className="flex flex-col pl-4">
              <Text size="large" className="text-primary-300">
                {data.place_name}
              </Text>
              <Text size="medium" className="text-gray-700">
                {data.address}
              </Text>
            </div>
            <Text size="small" className="text-gray-700 pr-4">
              {data.distance}km
            </Text>
          </div>
        );
      })}
    </section>
  );
};

export default SearchResultSection;
