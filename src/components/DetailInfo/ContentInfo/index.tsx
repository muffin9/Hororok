"use client";

import TabMenu from "@/components/common/TabMenu";
import { useState } from "react";
import DefaultInfo from "../DefaultInfo";
import MenuInfo from "../MenuInfo";
import PhotoInfo from "../PhotoInfo";
import ReviewInfo from "../ReviewInfo";

const ContentInfo = ({ cafeId }: { cafeId: string }) => {
  const [menuInfo, setMenuInfo] = useState([
    { id: "default", name: "기본정보", isClicked: true },
    { id: "menu", name: "메뉴", isClicked: false },
    { id: "photo", name: "사진", isClicked: false },
    { id: "review", name: "리뷰", isClicked: false },
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
      case "default":
        return (
          <div className="h-full flex flex-col pb-8">
            <DefaultInfo cafeId={cafeId} />
            <div className="mt-[10px]" />
            <MenuInfo cafeId={cafeId} handleOnMenuClick={handleOnMenuClick} />
            <div className="mt-[10px]" />
            <PhotoInfo cafeId={cafeId} handleOnMenuClick={handleOnMenuClick} />
            <div className="mt-[10px]" />
            <ReviewInfo cafeId={cafeId} />
          </div>
        );
      case "menu":
        return <MenuInfo cafeId={cafeId} page="all" />;
      case "photo":
        return <PhotoInfo cafeId={cafeId} page="all" />;
      case "review":
        return <ReviewInfo cafeId={cafeId} page="all" />;
      default:
        return null;
    }
  };

  return (
    <section className="h-full">
      <div className="mt-[10px]" />
      <TabMenu menuInfo={menuInfo} handleOnMenuClick={handleOnMenuClick} />
      <div>{renderMenuContent()}</div>
    </section>
  );
};

export default ContentInfo;
