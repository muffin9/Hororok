"use client";

import { timeDatas } from "@/app/constants";
import Tag from "@/components/common/Tag";
import Text from "@/components/common/Text";

interface TimeSelectionProps {
  handleItemClick: (timeId: number) => void;
  isIncludeTimeId: (timeId: number) => boolean;
}

const TimeSelection = ({
  handleItemClick,
  isIncludeTimeId,
}: TimeSelectionProps) => {
  return (
    <div className="pt-8 pb-28 bg-white">
      <Text size="medium" weight="bold">
        시간선택
      </Text>
      <div className="flex flex-col gap-5 mt-4">
        {timeDatas.map((data) => {
          return (
            <div key={data.id} className="flex flex-col gap-4">
              <Text size="medium" weight="bold">
                {data.title}
              </Text>
              <div className="flex flex-wrap gap-2">
                {data.timeData.map((time) => {
                  return (
                    <Tag
                      key={time.name}
                      tagName={time.name}
                      isSelected={isIncludeTimeId(time.id)}
                      handleItemClick={() => handleItemClick(time.id)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelection;
