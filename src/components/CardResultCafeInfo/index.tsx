"use client";

import { CafeType } from "@/interfaces/Cafe";
import { useRouter } from "next/navigation";
import Text from "../common/Text";
import Icon from "../common/Icon";
import { CafeInfoType } from "@/interfaces/Cafe";
import ShareButton from "../common/ShareButton";
import useHandleBookmark from "@/Hooks/useHandleBookmark";
import useHandleBottomSheet from "@/Hooks/useHandleBottomSheet";
import SaveSection from "../SaveSection";
import useOutsideClick from "@/Hooks/useOutsideClick";
import { useRef } from "react";
import useIsLoggedIn from "@/Hooks/useLoggedIn";

interface CardResultCafeInfoProps {
  cafeDatas: CafeType[] | CafeInfoType[];
  planId?: number;
}

const CardResultCafeInfo = ({ cafeDatas, planId }: CardResultCafeInfoProps) => {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();
  const overlayRef = useRef(null);
  const { currentSelectCafeId, handleClickBookmark } = useHandleBookmark();
  const { isBottomSheet, setIsBottomSheet } = useHandleBottomSheet();

  useOutsideClick(overlayRef, () => setIsBottomSheet(false));

  if (cafeDatas.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <Text size="medium" className="text-gray-800">
          아쉽지만 찾는 카페가 없어요.
        </Text>
      </div>
    );
  }

  return (
    <>
      {isBottomSheet && (
        <>
          <div className="absolute top-0 left-0 w-screen h-screen bg-gray-200" />
          <div ref={overlayRef} className="fixed bottom-0 z-[1000]">
            <SaveSection currentSelectCafeId={currentSelectCafeId} />
          </div>
        </>
      )}
      {cafeDatas.map((cafeData: CafeType | CafeInfoType) => {
        const isBookmark = cafeData.bookmarks?.length > 0;
        return (
          <>
            <div
              key={cafeData.id}
              className="w-full flex gap-3 px-4 my-4 cursor-pointer"
              onClick={() => router.push(`/cafe/${cafeData.id}`)}
            >
              <div
                className={`bg-cover bg-center w-[100px] h-[100px] rounded-lg`}
                style={{ backgroundImage: `url(http:${cafeData.imageUrl})` }}
              />
              <div className="min-w-[245px] flex flex-col py-2 gap-3">
                <header className="flex justify-between">
                  <Text
                    size="large"
                    className="text-black truncate overflow-hidden whitespace-nowrap"
                  >
                    {cafeData.name}
                  </Text>
                  <div className="flex gap-4">
                    <ShareButton cafeId={cafeData.id}>
                      <Icon type="share" size="small" alt="공유하기" />
                    </ShareButton>
                    <button
                      onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        if (!isLoggedIn) {
                          alert("로그인이 필요합니다.");
                          return;
                        }

                        if (planId) handleClickBookmark(e, cafeData.id, planId);
                        else handleClickBookmark(e, cafeData.id);

                        setIsBottomSheet(!isBottomSheet);
                      }}
                    >
                      <Icon
                        type={isBookmark ? "bookmark_check" : "bookmark"}
                        size="small"
                        alt="북마크"
                      />
                    </button>
                  </div>
                </header>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <Icon type="star" size="xSmall" alt="star" />
                    <Text size="small" className="text-black">
                      {cafeData.starRating}
                    </Text>
                    <Text size="extraSmall" className="text-gray-700">
                      ({cafeData.reviewCount})
                    </Text>
                  </div>
                  <Text
                    size="extraSmall"
                    className="text-gray-700 overflow-hidden whitespace-nowrap"
                  >
                    {cafeData.roadAddress}
                  </Text>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardResultCafeInfo;
