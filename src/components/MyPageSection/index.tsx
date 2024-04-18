"use client";

import { useState } from "react";
import TabMenu from "../common/TabMenu";

const MyPageSection = () => {
  const [menuInfo, setMenuInfo] = useState([
    { id: "save", name: "저장", isClicked: true },
    { id: "plan", name: "계획", isClicked: false },
    { id: "review", name: "리뷰", isClicked: false },
    { id: "myUnion", name: "내 조합", isClicked: false },
  ]);

  const handleOnMenuClick = (clickedId: string) => {
    const updatedMenuInfo = menuInfo.map((item) => ({
      ...item,
      isClicked: item.id === clickedId,
    }));
    setMenuInfo(updatedMenuInfo);
  };

  return (
    <div>
      <TabMenu menuInfo={menuInfo} handleOnMenuClick={handleOnMenuClick} />
    </div>
  );
};

export default MyPageSection;
