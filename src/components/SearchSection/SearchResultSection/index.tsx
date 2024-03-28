"use client";

import Text from "@/components/common/Text";
import useSearchPlace from "@/store/searchPlace";
import { useRouter } from "next/navigation";
import SearchInput from "../SearchInput";

import useHandleKeySearchInput from "@/Hooks/useHandleKeySearchInput";

const SearchResultSection = () => {
  const { resultSearchInfo } = useSearchPlace();
  const router = useRouter();
  const { handleKeyUpSearchInput } = useHandleKeySearchInput();

  const onClickPlace = (place_id: number) => {
    // SearchResultSection 컴포넌트 에게 해당 아이템 onclick시 지도 업데이트 되는 로직 보내줘야한다.
    // router push searchMap?
    // 이 Place_id 주변 카페를 서버로부터 가져와서 findPlace와 zustand에 저장할 필요가 있어보임. 우선 임시로 이 데이터만 뿌려주자.
    // 클라이언트 zustand에 저장해버리면 파라미터에 안담아도 된다!
    const findPlace = resultSearchInfo.find(
      (searchInfo) => searchInfo.place_id === place_id
    );

    if (findPlace) {
      const queryData = encodeURIComponent(JSON.stringify(findPlace));
      const path = `/search_map?data=${queryData}`;

      router.push(path);
    }
  };

  return (
    <section className="py-8 px-4 bg-white">
      <SearchInput handleKeyUpSearchInput={handleKeyUpSearchInput} />
      {resultSearchInfo.map((data) => {
        return (
          <div
            key={data.place_id}
            className="w-full h-20 flex justify-between items-center border-b-[1px] border-silver cursor-pointer"
            onClick={() => onClickPlace(data.place_id)}
          >
            <div className="flex flex-col">
              <Text size="large" className="text-primary-300">
                {data.place_name}
              </Text>
              <Text size="medium" className="text-gray-700">
                {data.address}
              </Text>
            </div>
            <Text size="small" className="text-gray-700">
              {data.distance}km
            </Text>
          </div>
        );
      })}
    </section>
  );
};

export default SearchResultSection;
