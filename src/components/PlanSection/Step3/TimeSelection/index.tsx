"use client";

import Tag from "@/components/common/Tag";
import Text from "@/components/common/Text";
import { useState } from "react";

const TimeSelection = () => {
  const [timeObject, setTimeObject] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
    27: false,
    28: false,
    29: false,
    30: false,
    31: false,
  });

  const checkSelected = (selectedId: number) => {
    const isAdjacentToSelected = (timeId: number) =>
      timeId === selectedId - 1 || timeId === selectedId + 1;

    for (const data of timeDatas) {
      for (const time of data.timeData) {
        if (time.id === selectedId) {
          return true; // 선택한 id는 항상 선택 가능
        }
        if (isAdjacentToSelected(time.id)) {
          return true; // 선택한 id의 +1, -1 값은 선택 가능
        }
      }
    }
    return false; // 선택한 id의 +1, -1 값이 아닌 경우 선택 불가능
  };

  const timeDatas = [
    {
      id: "morning",
      title: "오전",
      timeData: [
        { id: 1, value: 9, name: "9:00" },
        { id: 2, value: 9.5, name: "9:30" },
        { id: 3, value: 10, name: "10:00" },
        { id: 4, value: 10.5, name: "10:30" },
        { id: 5, value: 11, name: "11:00" },
        { id: 6, value: 11.5, name: "11:30" },
        { id: 7, value: 12, name: "12:00" },
        { id: 8, value: 12.5, name: "12:30" },
      ],
    },
    {
      id: "afternoon",
      title: "오후",
      timeData: [
        { id: 9, value: 13, name: "13:00" },
        { id: 10, value: 13.5, name: "13:30" },
        { id: 11, value: 14, name: "14:00" },
        { id: 12, value: 14.5, name: "14:30" },
        { id: 13, value: 15, name: "15:00" },
        { id: 14, value: 15.5, name: "15:30" },
        { id: 15, value: 16, name: "16:00" },
        { id: 16, value: 16.5, name: "16:30" },
        { id: 17, value: 17, name: "17:00" },
        { id: 18, value: 17.5, name: "17:30" },
        { id: 19, value: 18, name: "18:00" },
        { id: 20, value: 18.5, name: "18:30" },
      ],
    },
    {
      id: "night",
      title: "야간",
      timeData: [
        { id: 21, value: 19, name: "19:00" },
        { id: 22, value: 19.5, name: "19:30" },
        { id: 23, value: 20, name: "20:00" },
        { id: 24, value: 20.5, name: "20:30" },
        { id: 25, value: 21, name: "21:00" },
        { id: 26, value: 21.5, name: "21:30" },
        { id: 27, value: 22, name: "22:00" },
        { id: 28, value: 22.5, name: "22:30" },
        { id: 29, value: 23, name: "23:00" },
        { id: 30, value: 23.5, name: "23:30" },
        { id: 31, value: 24, name: "24:00" },
      ],
    },
  ];

  return (
    <div className="pt-8 pb-11 bg-white">
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
                      isSelected={checkSelected(time.id)}
                      handleItemClick={() =>
                        setTimeObject({ ...timeObject, [time.id]: true })
                      }
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
