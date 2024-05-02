import { getCafeReviewInfo } from "@/apis/cafe";
import { useQuery } from "@tanstack/react-query";

const useGetReviewInfo = (cafeId: string, cursor: number, page: string) => {
  const { data: reviewInfo } = useQuery({
    queryKey: ["getReviewInfo", cafeId],
    queryFn: () => getCafeReviewInfo(cafeId, cursor, page),
    staleTime: 600000,
  });

  return { reviewInfo };
};

export default useGetReviewInfo;
