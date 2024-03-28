import { useState } from "react";

const useMoreData = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClickMoreButton = () => {
    setShowMore(true);
  };

  return { showMore, handleClickMoreButton };
};

export default useMoreData;
