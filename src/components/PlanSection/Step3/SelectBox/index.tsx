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
        <span>{selectedOption.label}</span>
      </div>
      {isOpen && (
        <div className="absolute top-8 flex flex-col text-center cursor-pointer bg-white">
          {options.map((option) => (
            <div
              key={option.value}
              className="select-option"
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
