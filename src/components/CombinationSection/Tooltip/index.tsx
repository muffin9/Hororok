import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";

const CombinationTooltip = () => {
  return (
    <div className="w-[196px] h-[28px] flex gap-2 items-center bg-gray-800 px-3 rounded-xl">
      <Icon size="small" type="glass" alt="glass" />
      <Text size="extraSmall" className="text-white">
        자주찾는 조합으로 빠른 검색!
      </Text>
    </div>
  );
};

export default CombinationTooltip;
