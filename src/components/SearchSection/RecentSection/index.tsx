import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

const RecentSection = () => {
  const recentDummyData = [
    "브루클린 호떡",
    "할리스",
    "스타벅스",
    "커피빈",
    "잔다리카페",
  ];
  return (
    <section>
      <Text size="large" weight="bold" className="text-black">
        최근검색
      </Text>
      {recentDummyData.map((data) => {
        return (
          <div
            key={data}
            className="w-full h-16 flex justify-between items-center border-b-[1px] border-silver cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <Icon type="marker" size="medium" alt="marker" />
              <Text size="medium" className="text-black">
                {data}
              </Text>
            </div>
            <Icon type="close" size="xSmall" alt="close" />
          </div>
        );
      })}
    </section>
  );
};

export default RecentSection;
