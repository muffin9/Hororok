import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import * as React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  selectedOption: Option;
  onSelectOption: (option: Option) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  selectedOption,
  onSelectOption,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOptionSelect = (option: Option) => {
    onSelectOption(option);
    setIsOpen(!isOpen);
  };

  const toggleSelectBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={toggleSelectBox}
      >
        <Text size="small">{selectedOption.label}</Text>
        {isOpen ? (
          <Icon type="arrow_up" size="xSmall" alt="arrow_up" />
        ) : (
          <Icon type="arrow_under" size="xSmall" alt="arrow_down" />
        )}
      </div>
      {isOpen && (
        <div className="absolute top-8 p-3 flex flex-col text-center cursor-pointer bg-white rounded shadow-sm">
          {options.map((option) => (
            <div key={option.value} onClick={() => handleOptionSelect(option)}>
              <Text size="small">{option.label}</Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
