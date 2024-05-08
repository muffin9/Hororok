import { getUserReview } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";

const useGetMyCombination = () => {
  const { data: myCombination } = useQuery({
    queryKey: ["getUserCombination"],
    queryFn: () => getUserReview(),
    staleTime: 600000,
  });

  return { myCombination };
};

export default useGetMyCombination;
