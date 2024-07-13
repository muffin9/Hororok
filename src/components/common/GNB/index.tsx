import useHandleBottomSheet from "@/Hooks/useHandleBottomSheet";
import SaveSection from "@/components/SaveSection";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import usePlanStore from "@/store/usePlanStore";
import useUserInfoStore from "@/store/useUserInfo";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import useOutsideClick from "@/Hooks/useOutsideClick";
import useModal from "@/Hooks/useModal";
import Modal from "../Modal";
import useIsLoggedIn from "@/Hooks/useLoggedIn";

const GNB = () => {
  const isLoggedIn = useIsLoggedIn();
  const overlayRef = useRef(null);
  const router = useRouter();
  const { userInfo } = useUserInfoStore();
  const { isBottomSheet, setIsBottomSheet } = useHandleBottomSheet();
  const { showModal, openModal, closeModal } = useModal();

  // const searchParams = useSearchParams();
  // const show = searchParams.get("show");

  // const currentStep = usePlanStore((state) => state.currentStep);
  // const setCurrentStep = usePlanStore((state) => state.setCurrentStep);
  const { resetPlanStore, setIsWrting } = usePlanStore();

  const checkCurrentStep = () => {
    // if (currentStep !== "1") {
    //   router.push("?show=true");
    // } else {
    //   router.push("/plan/1");
    // }
    resetPlanStore();
    router.push("/plan/1");
  };

  useEffect(() => {
    setIsWrting(false);
  }, []);

  useOutsideClick(overlayRef, () => setIsBottomSheet(false));

  return (
    <>
      <footer className="w-[390px] h-16 fixed bottom-0 flex justify-between items-center px-20 bg-white z-[999]">
        {!isBottomSheet && (
          <div className="absolute top-[-43px] left-[70px] z-[1002]">
            <Image
              src={"/assets/Icon/tooltip.svg"}
              alt="tooltip"
              width={222}
              height={41}
            />
          </div>
        )}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={checkCurrentStep}
        >
          <Icon type="plan" size="medium" alt="계획하기" />
          <Text size="extraSmall" className="text-black">
            계획하기
          </Text>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            isLoggedIn ? router.push("/myPage/setting") : openModal();
          }}
        >
          <Icon type="setting" size="medium" alt="설정" />
          <Text size="extraSmall" className="text-black">
            설정
          </Text>
        </div>
        {/* <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            localStorage.getItem("accessToken")
              ? setIsBottomSheet(!isBottomSheet)
              : router.push("/login");
          }}
        >
          <Icon type="bookmark" size="medium" alt="저장" />
          <Text size="extraSmall" className="text-black">
            저장
          </Text>
        </div> */}
        {/* <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            localStorage.getItem("accessToken")
              ? router.push("/myPage")
              : router.push("/login");
          }}
        >
          <Icon type="account" size="medium" alt="로그인" />
          <Text size="extraSmall" className="text-black">
            마이페이지
          </Text>
        </div> */}
      </footer>
      {isBottomSheet && (
        <div ref={overlayRef} className="fixed bottom-16">
          <SaveSection />
        </div>
      )}
      {showModal && (
        <Modal
          title={`로그인을 해주세요.`}
          okButtonText="로그인"
          cancelButtonText="취소"
          okCallbackFunc={() => {
            router.push("/login");
          }}
          cancelCallbackFunc={() => {
            closeModal();
          }}
        />
      )}
      {/* {show && (
        <Modal
          title={`계획했던 여정이 있어요.\n나가시면 다시 처음부터 해야해요.`}
          okButtonText="나가기"
          cancelButtonText="아니오, 처음부터 할래요"
          okCallbackFunc={() => {
            router.push(`/plan/${currentStep}`);
          }}
          cancelCallbackFunc={() => {
            router.push(`/plan/1`);
            setCurrentStep("1");
          }}
        />
      )} */}
    </>
  );
};

export default GNB;
