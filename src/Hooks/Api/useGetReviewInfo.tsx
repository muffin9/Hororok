import { getCafeReviewInfo } from "@/apis/cafe";
import { useQuery } from "@tanstack/react-query";

const useGetReviewInfo = (cafeId: string, cursor: number) => {
  const { data: reviewInfo } = useQuery({
    queryKey: [`getReviewInfo_${cafeId}`],
    queryFn: () => getCafeReviewInfo(cafeId, cursor),
    staleTime: 600000,
  });

  return { reviewInfo };
};

export default useGetReviewInfo;
