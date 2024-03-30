import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { CafeDefaultInfoType } from "@/interfaces/Cafe";

interface DefaultInfoProps {
  cafeDefaultInfo: CafeDefaultInfoType;
}

const DefaultInfo = ({ cafeDefaultInfo }: DefaultInfoProps) => {
  return (
    <div className="flex flex-col gap-4 px-4 py-6 bg-white">
      <div className="flex items-center gap-1">
        <Icon type="marker" size="small" alt="marker" />
        <Text size="small">{cafeDefaultInfo.roadAddress}</Text>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <Icon type="clock" size="small" alt="clock" />
          <div className="flex gap-[11px]">
            <Text size="small" className="text-primary-300">
              {cafeDefaultInfo.openStatus}
            </Text>
            <Text size="small" weight="bold">
              영업 중
            </Text>
          </div>
        </div>
        <div className="flex flex-col pl-6">
          {cafeDefaultInfo.businessHours.map((businessHour: string) => {
            return (
              <Text key={businessHour} size="small">
                {businessHour}
              </Text>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Icon type="calendar" size="small" alt="calendar" />
        <Text size="small">
          {cafeDefaultInfo.closedDay.length === 0
            ? "휴무 없음"
            : cafeDefaultInfo.closedDay.join(",") + "휴무"}
        </Text>
      </div>
      <div className="flex items-center gap-1">
        <Icon type="call" size="small" alt="call" />
        <Text size="small">{cafeDefaultInfo.phoneNumber}</Text>
      </div>
    </div>
  );
};

export default DefaultInfo;
