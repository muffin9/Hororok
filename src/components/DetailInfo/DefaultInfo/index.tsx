import useGetCafeDetailInfo from "@/Hooks/Api/useGetCafeDetailInfo";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { CafeBasicInfoType } from "@/interfaces/Cafe";

const DefaultInfo = ({ cafeId }: { cafeId: string }) => {
  const { basicInfo }: { basicInfo: CafeBasicInfoType } =
    useGetCafeDetailInfo(cafeId);

  return (
    <div className="flex flex-col gap-4 px-4 py-6 bg-white">
      <div className="flex items-center gap-1">
        <Icon type="marker" size="small" alt="marker" />
        <Text size="small">{basicInfo.roadAddress}</Text>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <Icon type="clock" size="small" alt="clock" />
          <div className="flex gap-[11px]">
            <Text size="small" className="text-primary-300">
              {basicInfo.openStatus}
            </Text>
            <Text size="small" weight="bold">
              영업 중
            </Text>
          </div>
        </div>
        <div className="flex flex-col pl-6">
          {basicInfo.businessHours.map((businessHour: string) => {
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
          {basicInfo.closedDay.length === 0
            ? "휴무 없음"
            : basicInfo.closedDay.join(",") + "휴무"}
        </Text>
      </div>
      <div className="flex items-center gap-1">
        <Icon type="call" size="small" alt="call" />
        <Text size="small">{basicInfo.phoneNumber}</Text>
      </div>
    </div>
  );
};

export default DefaultInfo;
