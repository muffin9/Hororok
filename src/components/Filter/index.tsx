import Text from "@/components/common/Text";
import Icon from "@/components/common/Icon";
import SubmitButton from "./SubmitButton";
import Button from "@/components/common/Button";
import Condition from "@/components/Condition";
import { useState } from "react";

interface FilterProps {
  onCloseButton: () => void;
}

type SelectedItemsState = {
  [filterId: string]: string | undefined;
};

const Filter = ({ onCloseButton }: FilterProps) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItemsState>({});

  const handleItemClick = (filterId: string, itemId: string) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [filterId]: itemId,
    }));
  };

  const checkSelected = (conditionId: string, clickedItemId: string) => {
    return selectedItems[conditionId] === clickedItemId;
  };

  const onClickRefresh = () => {
    setSelectedItems({});
  };

  return (
    <section className="w-[390px] h-1/2 z-[1000] bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl boxShadow-xl overflow-scroll">
      <header>
        <div className="flex justify-between px-4 my-6">
          <Text size="large" weight="medium" className="text-black">
            카페 필터
          </Text>
          <button onClick={onCloseButton}>
            <Icon type="close" alt="close" />
          </button>
        </div>
      </header>
      <Condition
        handleItemClick={handleItemClick}
        checkSelected={checkSelected}
      />
      <div className="flex h-[50px]">
        <Button
          size="large"
          className="w-1/3 bg-white flex gap-[2px]"
          onClick={onClickRefresh}
        >
          <Icon size="small" type="refresh" alt="재설정" />
          <Text size="medium" className="text-black">
            재설정
          </Text>
        </Button>
        <SubmitButton onCloseButton={onCloseButton} className="mr-4" />
      </div>
    </section>
  );
};

export default Filter;
