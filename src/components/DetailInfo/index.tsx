"use client";

import { useRouter } from "next/navigation";
import Button from "../common/Button";
import Icon from "../common/Icon";
import Text from "../common/Text";
import ContentInfo from "./ContentInfo";
import Star from "../common/Star";
import useGetCafeDetailInfo from "@/Hooks/Api/useGetCafeDetailInfo";
import { CafeTopInfoType, CafeKeyWordType } from "@/interfaces/Cafe";
import ShareButton from "../common/ShareButton";
import useModal from "@/Hooks/useModal";
import Modal from "../common/Modal";
import useIsLoggedIn from "@/Hooks/useLoggedIn";
import useHandleBookmark from "@/Hooks/useHandleBookmark";
import useHandleBottomSheet from "@/Hooks/useHandleBottomSheet";
import { useRef } from "react";
import useOutsideClick from "@/Hooks/useOutsideClick";
import SaveSection from "../SaveSection";

interface DetailInfoProps {
  cafeId: string;
}

const DetailInfo = ({ cafeId }: DetailInfoProps) => {
  const isLoggedIn = useIsLoggedIn();
  const { topInfo }: { topInfo: CafeTopInfoType } =
    useGetCafeDetailInfo(cafeId);
  const { handleClickBookmark } = useHandleBookmark();

  const overlayRef = useRef(null);
  const { isBottomSheet, setIsBottomSheet } = useHandleBottomSheet();

  const { showModal, openModal, closeModal } = useModal();
  const router = useRouter();

  useOutsideClick(overlayRef, () => setIsBottomSheet(false));

  return (
    topInfo && (
      <>
        {isBottomSheet && (
          <>
            <div className="absolute top-0 left-0 w-screen h-screen bg-gray-200" />
            <div ref={overlayRef} className="fixed bottom-0 z-[1000]">
              <SaveSection currentSelectCafeId={+cafeId} />
            </div>
          </>
        )}
        <section className="h-screen overflow-y-scroll" key={topInfo.cafeId}>
          <div
            className={`bg-cover bg-center w-[390px] h-[228px]`}
            style={{
              backgroundImage: `url(http:${topInfo.originUrl})`,
            }}
          >
            <header className="flex justify-between px-4 pt-4">
              <div />
              <div className="flex gap-4">
                <ShareButton cafeId={+cafeId} />
                <button
                  className="cursor"
                  onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    if (!isLoggedIn) {
                      alert("로그인이 필요합니다.");
                      return;
                    }

                    handleClickBookmark(e, +cafeId);
                    setIsBottomSheet(!isBottomSheet);
                  }}
                >
                  <Icon type="bookmark_white" alt="저장하기" />
                </button>
              </div>
            </header>
          </div>
          <div className="px-4 flex flex-col py-6 bg-white">
            <header className="flex justify-between items-center">
              <Text size="large" weight="bold">
                {topInfo.cafeName}
              </Text>
              <Button
                size="small"
                className="flex gap-2 bg-white border-[1px] border-solid border-silver"
                onClick={() => {
                  if (!localStorage.getItem("accessToken")) {
                    openModal();
                  } else {
                    router.push(
                      `/review/create/${cafeId}?cafeName=${topInfo.cafeName}`
                    );
                  }
                }}
              >
                <Icon size="small" type="edit" alt="edit" />
                <Text size="small" className="text-black">
                  리뷰 쓰기
                </Text>
              </Button>
            </header>
            <div className="flex flex-col mt-2">
              <Text size="medium" className="text-gray-700">
                {topInfo.roadAddress}
              </Text>
              <div className="flex items-center gap-[2px]">
                <Star
                  starSize="xSmall"
                  starScore={Math.ceil(+topInfo.starRating)}
                />
                <Text size="small" weight="bold">
                  {topInfo.starRating.toFixed(1)}
                </Text>
                <Text size="extraSmall" className="text-gray-700">
                  ({topInfo.reviewCount})
                </Text>
              </div>
              <div className="flex mt-2 gap-2">
                {topInfo.keywords
                  .slice(0, 3)
                  .map((keyword: CafeKeyWordType) => {
                    return (
                      <button
                        key={keyword.id}
                        className="h-[31px] px-3 rounded-2xl border-[1px] border-solid border-primary-300"
                      >
                        <Text size="small" className="text-primary-300">
                          {keyword.name}
                        </Text>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>

          <ContentInfo cafeId={cafeId} />
          {showModal && (
            <Modal
              title={`로그인을 하면 리뷰를 남길 수 있어요.\n소중한 의견을 공유해주세요.`}
              okButtonText="둘러만보기"
              cancelButtonText="로그인하고 리뷰남기기"
              okCallbackFunc={() => {
                closeModal();
              }}
              cancelCallbackFunc={() => {
                router.push("/login");
              }}
            />
          )}
        </section>
      </>
    )
  );
};

export default DetailInfo;
