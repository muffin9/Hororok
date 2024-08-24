import { postUserFeedback } from "@/apis/user";
import { useMutation } from "@tanstack/react-query";
import useToastStore from "@/store/useToastStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useUserMutation = () => {
  const router = useRouter();
  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false);
  const { showMessage } = useToastStore();

  const { mutateAsync: postFeedback } = useMutation({
    mutationFn: async (content: string) => {
      setIsFeedbackLoading(true);
      return postUserFeedback(content);
    },
    onSuccess: (data) => {
      if (data.status === 204) {
        showMessage(`개선의견이 전달되었습니다.`);
        router.push("/map");
      }
    },
    onError: (error) => {
      console.error("Error posting feedback:", error);
      showMessage("오류가 발생했습니다. 다시 시도해 주세요.");
    },
    onSettled: () => {
      setIsFeedbackLoading(false); // 요청이 완료되면 로딩 상태 해제
    },
  });

  return { isFeedbackLoading, postFeedback };
};

export default useUserMutation;
