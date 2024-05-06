import axiosInstance from "@/apis/apiClient";
import { getProfile } from "@/apis/user";
import useToastStore from "@/store/useToastStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { apiSearchUrl } from "@/app/constants";

const useProfileMutation = () => {
  const { showMessage } = useToastStore();
  const router = useRouter();

  const { data: myProfile, isLoading: myProfileLoading } = useQuery({
    queryKey: ["getProfile"],
    queryFn: () => getProfile(),
  });

  const { mutateAsync: postProfile } = useMutation({
    mutationFn: async ({
      formData,
      nickname,
    }: {
      formData: FormData;
      nickname: string;
    }) => {
      return axiosInstance.post(
        `${apiSearchUrl}/myPage/profile/edit?nickname=${nickname}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: (data) => {
      if (data) {
        showMessage(`프로필이 변경되었습니다.`);
        router.push(`/myPage`);
      }
    },
  });

  return { myProfile, postProfile, myProfileLoading };
};

export default useProfileMutation;
