"use client";

import { getReSearch } from "@/apis/search";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import useCoordinatesStore from "@/store/useCoordinatesStore";
import useSearcResultListStorehPlace from "@/store/useSearchResultListStore";
import { useRouter } from "next/navigation";

const ReSearchButton = () => {
  const { coordinates } = useCoordinatesStore();
  const router = useRouter();
  const { setSearchResultList } = useSearcResultListStorehPlace();

  const onClickReSearch = async () => {
    const data = await getReSearch(coordinates.latitude, coordinates.longitude);
    setSearchResultList(data);
    router.push(
      `/search_map?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}`,
    );
  };

  return (
    <button
      className="h-[38px] px-2 flex items-center gap-[4px] m-auto bg-white rounded-lg shadow-xl"
      onClick={onClickReSearch}
    >
      <Icon size="small" type="refresh" alt="refresh" />
      <Text size="small" className="text-primary-300">
        이 지역에서 재검색
      </Text>
    </button>
  );
};

export default ReSearchButton;
