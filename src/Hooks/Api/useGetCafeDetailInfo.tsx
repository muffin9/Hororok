import { getCafeDetailInfo } from "@/apis/cafe";
import { useQuery } from "@tanstack/react-query";

const useGetCafeDetailInfo = (cafeId: string) => {
  const { data } = useQuery({
    queryKey: ["getCafeDetailInfo", cafeId],
    queryFn: () => getCafeDetailInfo(cafeId),
  });

  return { data };
};

export default useGetCafeDetailInfo;
