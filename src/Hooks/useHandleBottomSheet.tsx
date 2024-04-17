import { useState } from "react";

const useHandleBottomSheet = () => {
  const [isBottomSheet, setIsBottomSheet] = useState(false);
  return { isBottomSheet, setIsBottomSheet };
};

export default useHandleBottomSheet;
