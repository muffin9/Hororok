"use client";

import TabMenu from "@/components/common/TabMenu";
import { useState } from "react";
import DefaultInfo from "../DefaultInfo";
import MenuInfo from "../MenuInfo";
import PhotoInfo from "../PhotoInfo";
import ReviewInfo from "../ReviewInfo";
import { CafeDetailInfoType } from "@/interfaces/Cafe";

interface ContentInfoProps {
  cafeDetailInfo: CafeDetailInfoType;
}

const ContentInfo = ({ cafeDetailInfo }: ContentInfoProps) => {
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

  const calculatedDefaultInfo = () => {
    return {
      roadAddress: cafeDetailInfo.roadAddress,
      openStatus: cafeDetailInfo.openStatus,
      businessHours: cafeDetailInfo.businessHours,
      closedDay: cafeDetailInfo.closedDay,
      phoneNumber: cafeDetailInfo.phoneNumber,
    };
  };

  const calculatedMenuInfo = () => {
    return cafeDetailInfo.menus;
  };

  const calculatedPhotoInfo = () => {
    return cafeDetailInfo.reviewImageUrls;
  };

  const calculatedReviewInfo = () => {
    return cafeDetailInfo.reviews;
  };

  const renderMenuContent = () => {
    const clickedMenu = menuInfo.find((item) => item.isClicked);
    switch (clickedMenu?.id) {
      case "default":
        return (
          <div className="flex flex-col">
            <DefaultInfo cafeDefaultInfo={calculatedDefaultInfo()} />
            <div className="mt-[10px]" />
            <MenuInfo moreButton={true} cafeMenuInfo={calculatedMenuInfo()} />
            <div className="mt-[10px]" />
            <PhotoInfo
              moreButton={true}
              cafePhotoInfo={calculatedPhotoInfo()}
            />
            <div className="mt-[10px]" />
            <ReviewInfo
              moreButton={true}
              cafeReviewInfo={calculatedReviewInfo()}
            />
          </div>
        );
      case "menu":
        return <MenuInfo cafeMenuInfo={calculatedMenuInfo()} />;
      case "photo":
        return <PhotoInfo cafePhotoInfo={calculatedPhotoInfo()} />;
      case "review":
        return <ReviewInfo cafeReviewInfo={calculatedReviewInfo()} />;
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="mt-[10px]" />
      <TabMenu menuInfo={menuInfo} handleOnMenuClick={handleOnMenuClick} />
      <div>{renderMenuContent()}</div>
    </section>
  );
};

export default ContentInfo;
