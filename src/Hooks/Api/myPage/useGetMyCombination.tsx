import { getUserCombination } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";

const useGetMyCombination = () => {
  const { data: myCombination } = useQuery({
    queryKey: ["getUserCombination"],
    queryFn: () => getUserCombination(),
    staleTime: 600000,
  });

  return { myCombination };
};

export default useGetMyCombination;
