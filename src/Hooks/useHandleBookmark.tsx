import { useState } from "react";

const useHandleBookmark = () => {
  const [currentSelectCafeId, setCurrentSelectCafeId] = useState<number>(0);
  const handleClickBookmark = (
    e: React.SyntheticEvent<HTMLButtonElement>,
    cafeId: number
  ) => {
    e.stopPropagation();
    setCurrentSelectCafeId(cafeId);
  };

  return { currentSelectCafeId, handleClickBookmark };
};

export default useHandleBookmark;
