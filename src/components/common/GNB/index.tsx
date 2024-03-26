import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import Image from "next/image";

const GNB = () => {
  return (
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
        onClick={() => alert("서비스 준비중입니다...")}
      >
        <Icon type="logo" size="medium" alt="계획하기" />
        <Text size="extraSmall" className="text-black">
          계획하기
        </Text>
      </div>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => alert("서비스 준비중입니다...")}
      >
        <Icon type="account" size="medium" alt="로그인" />
        <Text size="extraSmall" className="text-black">
          로그인
        </Text>
      </div>
    </footer>
  );
};

export default GNB;
