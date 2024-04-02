import { getSearchListByKeywords } from "@/apis/search";
import { useQuery } from "@tanstack/react-query";
import useGeolocation from "../useGeolocation";
import { CategoryKeywordsType } from "@/store/useCategoryKeywordStore";

const useCafeDetailInfo = (categoryKeywords: CategoryKeywordsType) => {
  const location = useGeolocation();
  const { data } = useQuery({
    queryKey: ["getSearchListByKeywords", categoryKeywords],
    queryFn: () =>
      getSearchListByKeywords(
        location.latitude,
        location.longitude,
        categoryKeywords
      ),
  });

  return { data };
};

export default useCafeDetailInfo;
