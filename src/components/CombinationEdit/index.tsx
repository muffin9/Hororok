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

interface CombinationEditProps {
  combinationData?: CombinationGetType;
}

const CombinationEdit = ({ combinationData }: CombinationEditProps) => {
  const [name, setName] = useState(combinationData?.name || "");
  const [icon, setIcon] = useState(combinationData?.icon || "notebook");

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const {
    selectedItems,
    setSelectedItems,
    handleItemClick,
    checkSelected,
    checkKeywordDisabledSubmit,
    onClickRefresh,
  } = useKeyword();

  const onCombinationSubmit = async () => {
    // name, icon, convertRequestKeywords(selectedItems) 담아 보내기
    alert("서비스 준비중입니다...");
  };

  useEffect(() => {
    if (combinationData) {
      setSelectedItems(combinationData.categoryKeywords);
    }
  }, [combinationData, setSelectedItems]);

  return (
    <section className="flex flex-col gap-4">
      <Input
        type="text"
        value={name}
        placeholder="폴더명을 입력해 주세요."
        onChange={handleChangeInputValue}
        className="w-full bg-gray-200 p-3 rounded"
        maxlength={20}
      />
      <div>
        {combinationIcons.map((combi) => {
          return (
            <button
              key={combi.id}
              className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full"
            >
              <Icon size="small" type={icon as IconType} alt={combi.type} />
            </button>
          );
        })}
      </div>
      <Text size="xLarge">자주 찾는 조합을 선택해주세요.</Text>
      <Condition
        handleItemClick={handleItemClick}
        checkSelected={checkSelected}
        filterDatas={filterDatas}
        maxSelectCount={5}
      />
      <div className="flex p-[-16px] h-[50px] border-t-[1px] border-silver">
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
