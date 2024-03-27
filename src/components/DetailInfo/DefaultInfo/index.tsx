import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

const DefaultInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <Icon type="marker" size="small" alt="marker" />
        <Text size="small">서울 영등포구 의사당대로 1길</Text>
      </div>
      <div className="flex items-center gap-1">
        <Icon type="clock" size="small" alt="clock" />
        <div className="flex gap-[11px]">
          <Text size="small" className="text-primary-300">
            영업 전
          </Text>
          <Text size="small">영업 중</Text>
        </div>
        <Text size="small">월요일 12:00~20:00</Text>
      </div>
      <div className="flex items-center gap-1">
        <Icon type="calendar" size="small" alt="calendar" />
        <Text size="small">화요일 휴무</Text>
      </div>
      <div className="flex items-center gap-1">
        <Icon type="photo" size="small" alt="phone" />
        <Text size="small">02-111-1111</Text>
      </div>
    </div>
  );
};

export default DefaultInfo;
