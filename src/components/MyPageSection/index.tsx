"use client";

import { useState } from "react";
import TabMenu from "../common/TabMenu";
import Profile from "./Profile";
import FolderList from "../common/FolderList";
import MyPlanList from "./MyPlanList";
import MyReview from "./MyReview";
import MyCombination from "./MyCombination";

const MyPageSection = () => {
  const [menuInfo, setMenuInfo] = useState([
    { id: "save", name: "저장", isClicked: true },
    { id: "plan", name: "계획", isClicked: false },
    { id: "review", name: "리뷰", isClicked: false },
    { id: "myCombination", name: "내 조합", isClicked: false },
  ]);

  const handleOnMenuClick = (clickedId: string) => {
    const updatedMenuInfo = menuInfo.map((item) => ({
      ...item,
      isClicked: item.id === clickedId,
    }));
    setMenuInfo(updatedMenuInfo);
  };

  const renderMenuContent = () => {
    const clickedMenu = menuInfo.find((item) => item.isClicked);
    switch (clickedMenu?.id) {
      case "save":
        return <FolderList />;
      case "plan":
        return <MyPlanList />;
      case "review":
        return <MyReview />;
      case "myCombination":
        return <MyCombination />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Profile />
      <TabMenu menuInfo={menuInfo} handleOnMenuClick={handleOnMenuClick} />
      <div>{renderMenuContent()}</div>
    </div>
  );
};

export default MyPageSection;
