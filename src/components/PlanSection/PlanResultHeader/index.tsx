import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

const PlanResultHeader = () => {
  return (
    <header className="flex flex-col pb-4 gap-3 border-solid border-b-[1px] border-gray-200">
      <div className="flex justify-between">
        <Text size="medium" weight="bold">
          4월 3일 화요일 15시 30분
        </Text>
        <div className="flex gap-4">
          <Icon type="share" size="small" alt="공유하기" />
          <Icon type="bookmark" size="small" alt="북마크" />
        </div>
      </div>
      <div>
        망원역으로부터 15분이내 <br />
        데이트하기 좋은 카페를 찾았어요!
      </div>
    </header>
  );
};

export default PlanResultHeader;
