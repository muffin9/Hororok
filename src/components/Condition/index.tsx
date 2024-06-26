import Text from "../common/Text";
import Tag from "../common/Tag";
import { CategoryIdType } from "../Home/HomeSection";
import { FilterDataType } from "@/interfaces/Cafe";
import Icon from "../common/Icon";

interface ConditionProps {
  categoryId?: CategoryIdType;
  handleItemClick: (category: string, name: string) => void;
  checkSelected: (category: string, name: string) => boolean;
  filterDatas: FilterDataType[];
  maxSelectCount: number;
}

const Condition = ({
  categoryId,
  handleItemClick,
  checkSelected,
  filterDatas,
  maxSelectCount,
}: ConditionProps) => {
  const sortedFilterData = () => {
    if (categoryId) {
      const clickedCategoryIdx = filterDatas.findIndex(
        (data) => data.category === categoryId
      );
      if (clickedCategoryIdx !== -1) {
        const clickedCategory = filterDatas.splice(clickedCategoryIdx, 1)[0];
        filterDatas.unshift(clickedCategory);
      }
      return filterDatas;
    } else return filterDatas;
  };

  return (
    <div className="py-6 border-silver">
      <div className="flex gap-1 text-primary-300 pb-4">
        <Icon size="xSmall" type="info" alt="info" />
        <Text size="small">최대 {maxSelectCount}개 선택할 수 있어요</Text>
      </div>
      {sortedFilterData().map((condition) => {
        return (
          <div key={condition.category} className="flex flex-col gap-4">
            <header className="flex items-center gap-2">
              <Text size="medium" weight="bold" className="text-black">
                {condition.title}
              </Text>
              {condition.subTitle && (
                <Text size="small" className="text-gray-800">
                  {condition.subTitle}
                </Text>
              )}
            </header>
            <div className="flex gap-2 flex-wrap mb-[30px]">
              {condition.data.map((name) => {
                return (
                  <Tag
                    key={name}
                    tagName={name}
                    isSelected={checkSelected(condition.category, name)}
                    handleItemClick={() =>
                      handleItemClick(condition.category, name)
                    }
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Condition;
