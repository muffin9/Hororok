import { filterDatas } from "@/app/constants";
import Text from "../common/Text";
import Tag from "../common/Tag";

const Condition = () => {
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
                return <Tag key={d.id} tagName={d.name} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Condition;
