import axiosInstance from "@/apis/apiClient";
import { apiSearchUrl } from "@/app/constants";
import { PatchCombinationType } from "@/interfaces/Combination";
import useToastStore from "@/store/useToastStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useCombinationMutation = () => {
  const { showMessage } = useToastStore();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutateAsync: postCombination } = useMutation({
    mutationFn: async (combinationData: PatchCombinationType) => {
      return axiosInstance.post(
        `${apiSearchUrl}/combination/create`,
        combinationData
      );
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.refetchQueries({
          queryKey: ["getUserCombination"],
        });
        showMessage(`조합이 생성되었습니다.`);
        router.push("/map");
      }
    },
  });

  const { mutateAsync: patchCombination } = useMutation({
    mutationFn: async ({
      combinationId,
      combinationData,
    }: {
      combinationId: number;
      combinationData: PatchCombinationType;
    }) => {
      return axiosInstance.patch(
        `${apiSearchUrl}/combination/${combinationId}/edit`,
        combinationData
      );
    },
    onSuccess: (data) => {
      if (data) {
        queryClient.refetchQueries({
          queryKey: ["getUserCombination"],
        });
        showMessage(`조합이 수정되었습니다.`);
        router.push("/myPage");
      }
    },
  });

  return { postCombination, patchCombination };
};

export default useCombinationMutation;
