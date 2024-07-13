import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import * as React from "react";

interface Option {
  value: number;
  label: string;
}

interface SelectBoxProps {
  selectedOption: Option;
  handleSelectOption: (type: "left" | "right") => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  selectedOption,
  handleSelectOption,
}) => {
  return (
    <div>
      <div className="flex relative justify-center items-center gap-4 cursor-pointer">
        <button onClick={() => handleSelectOption("left")}>
          <Icon size="xSmall" type="arrow_left" alt="arrow_left" />
        </button>
        <Text size="small">{selectedOption.label}</Text>
        <button onClick={() => handleSelectOption("right")}>
          <Icon size="xSmall" type="arrow_right" alt="arrow_right" />
        </button>
      </div>
    </div>
  );
};

export default SelectBox;
