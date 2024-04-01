import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import usePlanStore from "@/store/\bplanStore";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
// import Modal from "../Modal";

const GNB = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const show = searchParams.get("show");

  // const currentStep = usePlanStore((state) => state.currentStep);
  // const setCurrentStep = usePlanStore((state) => state.setCurrentStep);
  const setIsWrting = usePlanStore((state) => state.setIsWrting);

  const checkCurrentStep = () => {
    // if (currentStep !== "1") {
    //   router.push("?show=true");
    // } else {
    //   router.push("/plan/1");
    // }
    router.push("/plan/1");
  };

  useEffect(() => {
    setIsWrting(false);
  }, []);

  return (
    <>
      <footer className="w-[390px] h-16 fixed bottom-0 flex justify-between items-center px-20 bg-white z-[999]">
        <div className="absolute top-[-43px] left-[70px]">
          <Image
            src={"/assets/Images/tooltip.png"}
            alt="tooltip"
            width={222}
            height={41}
          />
          <Text
            size="extraSmall"
            className="text-black absolute top-[12px] left-[15px]"
          >
            내일 방문할 라떼 맛있는 카페 찾는다면?
          </Text>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={checkCurrentStep}
        >
          <Icon type="logo" size="medium" alt="계획하기" />
          <Text size="extraSmall" className="text-black">
            계획하기
          </Text>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => router.push("/login")}
        >
          <Icon type="account" size="medium" alt="로그인" />
          <Text size="extraSmall" className="text-black">
            로그인
          </Text>
        </div>
      </footer>
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
