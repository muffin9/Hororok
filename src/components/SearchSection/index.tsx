"use client";

import { useState } from "react";
import SearchInput from "@/components/SearchSection/SearchInput";
import RecentSection from "./RecentSection";
import SearchResultSection from "./SearchResultSection";
import { SearchPlaceInfoType } from "@/interfaces/SearchPlace";
import { useRouter } from "next/navigation";

const SearchSection = () => {
  const router = useRouter();
  const [resultSearchInfo, setResultSearchInfo] = useState<
    SearchPlaceInfoType[]
  >([]);

  const [onRecentSearch, setOnRecentSearch] = useState(true);

  const onClickPlace = (place_id: number) => {
    // SearchResultSection 컴포넌트 에게 해당 아이템 onclick시 지도 업데이트 되는 로직 보내줘야한다.
    // router push searchMap.
    // 이 Place_id 주변 카페를 가져와야 하지만.. 우선 임시로 이 데이터만 뿌려주자.
    const findPlace = resultSearchInfo.find(
      (searchInfo) => searchInfo.place_id === place_id
    );

    console.log(findPlace);
    if (findPlace) {
      const queryData = encodeURIComponent(JSON.stringify(findPlace));
      const path = `/search_map?data=${queryData}`;

      router.push(path);
    }
  };

  return (
    <section className="py-8 px-4">
      <SearchInput
        setOnRecentSearch={setOnRecentSearch}
        setResultSearchInfo={setResultSearchInfo}
      />
      <div className="mt-4">
        <div>
          {onRecentSearch ? (
            <RecentSection />
          ) : (
            <SearchResultSection
              resultSearchInfo={resultSearchInfo}
              onClickPlace={onClickPlace}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
