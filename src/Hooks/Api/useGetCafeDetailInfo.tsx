import { getCafeBasicInfo, getCafeMenuInfo, getCafeTopInfo } from "@/apis/cafe";
import { useQuery } from "@tanstack/react-query";

const useGetCafeDetailInfo = (cafeId: string) => {
  const { data: topInfo } = useQuery({
    queryKey: ["getCafeTopInfo", cafeId],
    queryFn: () => getCafeTopInfo(cafeId),
  });

  const { data: basicInfo } = useQuery({
    queryKey: ["getCafeDefaultInfo", cafeId],
    queryFn: () => getCafeBasicInfo(cafeId),
  });

  const { data: menuInfo } = useQuery({
    queryKey: ["getMenuInfo", cafeId],
    queryFn: () => getCafeMenuInfo(cafeId),
  });

  return { topInfo, basicInfo, menuInfo };
};

export default useGetCafeDetailInfo;
