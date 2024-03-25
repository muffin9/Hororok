import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

const GNB = () => {
  return (
    <footer className="w-[390px] h-16 flex justify-between px-20">
      <div className="flex flex-col items-center">
        <Icon type="recommend" size="medium" alt="추천받기" />
        <Text size="extraSmall" className="text-black">
          추천받기
        </Text>
      </div>
      <div className="flex flex-col items-center">
        <Icon type="account" size="medium" alt="로그인" />
        <Text size="extraSmall" className="text-black">
          로그인
        </Text>
      </div>
    </footer>
  );
};

export default GNB;
