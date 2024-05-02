import { getCafeBasicInfo, getCafeMenuInfo, getCafeTopInfo } from "@/apis/cafe";
import { useQuery } from "@tanstack/react-query";

const useGetCafeDetailInfo = (cafeId: string) => {
  const { data: topInfo } = useQuery({
    queryKey: ["getCafeTopInfo", cafeId],
    queryFn: () => getCafeTopInfo(cafeId),
    staleTime: 600000,
  });

  const { data: basicInfo } = useQuery({
    queryKey: ["getCafeDefaultInfo", cafeId],
    queryFn: () => getCafeBasicInfo(cafeId),
    staleTime: 600000,
  });

  const { data: menuInfo } = useQuery({
    queryKey: ["getMenuInfo", cafeId],
    queryFn: () => getCafeMenuInfo(cafeId),
    staleTime: 600000,
  });

  return { topInfo, basicInfo, menuInfo };
};

export default useGetCafeDetailInfo;
