"use client";

import useToastStore from "@/store/useToastStore";
import Text from "../Text";

const ToastMessage = () => {
  const { message, showToast, hideMessage } = useToastStore();

  return (
    showToast && (
      <div className="fixed bottom-28 left-1/2 -translate-x-1/2">
        <button
          className="px-4 py-3 rounded-2xl bg-gray-800"
          onClick={hideMessage}
        >
          <Text size="medium" className="text-white">
            {message}
          </Text>
        </button>
      </div>
    )
  );
};

export default ToastMessage;
