import { postUserFeedback } from "@/apis/user";
import { useMutation } from "@tanstack/react-query";
import useToastStore from "@/store/useToastStore";
import { useRouter } from "next/navigation";

const useUserMutation = () => {
  const router = useRouter();
  const { showMessage } = useToastStore();

  const { mutateAsync: postFeedback } = useMutation({
    mutationFn: async (content: string) => {
      return postUserFeedback(content);
    },
    onSuccess: (data) => {
      if (data) {
        showMessage(`개선의견이 전달되었습니다.`);
        router.push("/map");
      }
    },
  });

  return { postFeedback };
};

export default useUserMutation;
