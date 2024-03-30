import { getSearchListByKeywords } from "@/apis/search";
import { useQuery } from "@tanstack/react-query";
import useGeolocation from "../useGeolocation";

const useCafeDetailInfo = (keywords: string[]) => {
  const location = useGeolocation();
  const { data } = useQuery({
    queryKey: ["getSearchListByKeywords", keywords],
    queryFn: () =>
      getSearchListByKeywords(location.latitude, location.longitude, keywords),
  });

  return { data };
};

export default useCafeDetailInfo;
