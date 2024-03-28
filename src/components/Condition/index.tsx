import { filterDatas } from "@/app/constants";
import Text from "../common/Text";
import Tag from "../common/Tag";

interface ConditionProps {
  handleItemClick: (filterId: string, itemId: string) => void;
  checkSelected: (conditionId: string, clickedItemId: string) => boolean;
}

const Condition = ({ handleItemClick, checkSelected }: ConditionProps) => {
  return (
    <div className="px-4 py-6 border-t-[1px] border-b-[1px] border-silver">
      {filterDatas.map((condition) => {
        return (
          <div key={condition.id} className="flex flex-col gap-4">
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
              {condition.data.map((d) => {
                return (
                  <Tag
                    key={d.id}
                    tagName={d.name}
                    isSelected={checkSelected(condition.id, d.id)}
                    handleItemClick={() => handleItemClick(condition.id, d.id)}
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
