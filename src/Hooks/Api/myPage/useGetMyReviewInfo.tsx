import { getUserReview } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";

const useGetMyReviewInfo = () => {
  const { data: myReviewInfo } = useQuery({
    queryKey: ["getUserReviews"],
    queryFn: () => getUserReview(),
    staleTime: 600000,
  });

  return { myReviewInfo };
};

export default useGetMyReviewInfo;
