import { getCombination } from "@/apis/combination";
import { useQuery } from "@tanstack/react-query";

const useGetCombination = (combinationId: string) => {
  const { data: combination } = useQuery({
    queryKey: ["useGetCombination", combinationId],
    queryFn: () => getCombination(combinationId),
    staleTime: 600000,
  });

  return { combination };
};

export default useGetCombination;
