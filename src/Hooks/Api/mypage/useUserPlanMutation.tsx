import axiosInstance from "@/apis/apiClient";
import { getUserPlanData } from "@/apis/user";
import { apiSearchUrl } from "@/app/constants";
import { SortType, PlanStatusType } from "@/interfaces/user";
import { useMutation, useQuery } from "@tanstack/react-query";

const useUserPlanMutation = (sort: SortType, status: PlanStatusType) => {
  const { data: userPlanData } = useQuery({
    queryKey: ["getUserPlanData"],
    queryFn: () => getUserPlanData(sort, status, 1, 3),
  });

  const { mutateAsync: deletePlan } = useMutation({
    mutationFn: async ({
      planId,
      planStatus,
    }: {
      planId: number;
      planStatus: PlanStatusType;
    }) => {
      return axiosInstance.delete(
        `${apiSearchUrl}/plan/${planId}/delete?status=${planStatus}`
      );
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return { userPlanData, deletePlan };
};

export default useUserPlanMutation;
