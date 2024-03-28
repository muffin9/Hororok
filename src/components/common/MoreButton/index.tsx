import Icon from "../Icon";
import Text from "../Text";

interface MoreButtonProps {
  text: string;
  handleClickMoreButton: () => void;
}

const MoreButton = ({ text, handleClickMoreButton }: MoreButtonProps) => {
  return (
    <button
      className="h-[35px] px-4 bg-bluegray rounded-2xl flex items-center absolute top-[-17.5px] left-1/2 transform -translate-x-1/2"
      onClick={handleClickMoreButton}
    >
      <Text size="small">{text}</Text>
      <Icon size="xSmall" type="arrow_right" alt="arrow_right" />
    </button>
  );
};

export default MoreButton;
