import { getProfile } from "@/apis/user";
import { useQuery } from "@tanstack/react-query";

const useProfileMutation = () => {
  const { data: myProfile, isLoading: myProfileLoading } = useQuery({
    queryKey: ["getProfile"],
    queryFn: () => getProfile(),
  });

  return { myProfile, myProfileLoading };
};

export default useProfileMutation;
