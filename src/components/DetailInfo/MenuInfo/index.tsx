import Text from "@/components/common/Text";

const MenuInfo = () => {
  return (
    <div className="h-full bg-white">
      <header>
        <Text size="large" weight="bold">
          메뉴
        </Text>
      </header>
      <div className="flex flex-col mt-4">
        <div className="flex gap-4">
          <div
            className={`bg-sampleImage bg-cover bg-center w-[100px] h-[100px] rounded-lg`}
          ></div>
          <div className="flex flex-col">
            <Text size="medium" weight="bold" className="text-gray-650">
              메뉴1
            </Text>
            <Text size="medium" weight="bold" className="text-primary-300">
              4,500원
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;
