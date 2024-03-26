import { filterDatas } from "@/app/constants";
import Text from "../common/Text";
import Tag from "../common/Tag";
import { useState } from "react";

type SelectedItemsState = {
  [filterId: string]: string | undefined;
};

const Condition = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedItemsState>({});

  const handleItemClick = (filterId: string, itemId: string) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [filterId]: itemId,
    }));
  };

  console.log(selectedItems);
  return (
    <div className="px-4 py-6 border-t-[1px] border-b-[1px] border-silver">
      {filterDatas.map((condition) => {
        return (
          <div key={condition.id} className="flex flex-col gap-4">
            <Text size="medium" weight="bold" className="text-black">
              {condition.title}
            </Text>
            <div className="flex gap-2 flex-wrap mb-[30px]">
              {condition.data.map((d) => {
                return (
                  <Tag
                    key={d.id}
                    tagName={d.name}
                    isSelected={selectedItems[condition.id] === d.id}
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
