import useIsLoggedIn from "@/Hooks/useLoggedIn";
import { getUserCombination } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";

const useGetMyCombination = () => {
  const isLoggedIn = useIsLoggedIn();

  const { data: myCombination } = useQuery({
    queryKey: ["getUserCombination"],
    queryFn: () => {
      if (isLoggedIn) {
        return getUserCombination();
      } else {
        return Promise.resolve(null);
      }
    },
    enabled: isLoggedIn,
    staleTime: 600000,
  });

  return { myCombination };
};

export default useGetMyCombination;
