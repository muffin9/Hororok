"use client";

import { useEffect, useState } from "react";
import Input from "../common/Input";
import Text from "../common/Text";
import useKeyword from "@/Hooks/Keyword/useKeyword";
import { combinationIcons, filterDatas } from "@/app/constants";
import Condition from "../Condition";
import RefreshButton from "../common/RefreshButton";
import SubmitButton from "../FilterSection/SubmitButton";
import Icon, { IconType } from "../common/Icon";
import { CombinationGetType } from "@/interfaces/Combination";
import useCombinationMutation from "@/Hooks/Api/combination/useCombinationMutation";
import { convertRequestKeywords } from "@/utils";

interface CombinationEditProps {
  combination?: CombinationGetType;
}

const CombinationEdit = ({ combination }: CombinationEditProps) => {
  const [name, setName] = useState(combination?.name || "");
  const [icon, setIcon] = useState(combination?.icon || "notebook");
  const { postCombination, patchCombination } = useCombinationMutation();

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const {
    selectedItems,
    setSelectedItems,
    handlePopularItemClick,
    handleItemClick,
    checkSelected,
    checkKeywordDisabledSubmit,
    onClickRefresh,
    calculatedPopularKeywordIds,
  } = useKeyword();

  const onCombinationSubmit = () => {
    const combinationData = {
      name,
      icon,
      keywords: convertRequestKeywords(selectedItems),
    };
    if (combination?.id) {
      patchCombination({ combinationId: combination.id, combinationData });
    } else postCombination(combinationData);
  };

  useEffect(() => {
    if (combination) {
      setSelectedItems(combination.categoryKeywords);
    }
  }, [combination, setSelectedItems]);

  return (
    <section className="flex flex-col gap-4 overflow-y-scroll">
      <Input
        type="text"
        value={name}
        placeholder="폴더명을 입력해 주세요."
        onChange={handleChangeInputValue}
        className="w-full mx-4 bg-gray-200 p-3 rounded"
        maxlength={20}
      />
      <div className="flex gap-4 px-4">
        {combinationIcons.map((combi) => {
          return (
            <button
              key={combi.id}
              className={`w-[40px] h-[40px] flex justify-center items-center ${icon === combi.type ? "bg-primary-300" : "bg-bluegray"} rounded-full`}
              onClick={() => setIcon(combi.type as IconType)}
            >
              <Icon
                size="small"
                type={combi.type as IconType}
                alt={combi.type}
              />
            </button>
          );
        })}
      </div>
      <div className="px-4">
        <Text size="xLarge" weight="bold">
          자주 찾는 조합을 선택해주세요.
        </Text>
        <Condition
          handlePopularItemClick={handlePopularItemClick}
          handleItemClick={handleItemClick}
          checkSelected={checkSelected}
          calculatedPopularKeywordIds={calculatedPopularKeywordIds}
          filterDatas={filterDatas}
          maxSelectCount={5}
        />
      </div>
      <div className="flex">
        <RefreshButton onClickRefresh={onClickRefresh} />
        <SubmitButton
          onSubmit={onCombinationSubmit}
          className="mr-4"
          isDisabled={checkKeywordDisabledSubmit}
        />
      </div>
    </section>
  );
};

export default CombinationEdit;
