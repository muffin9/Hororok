import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";

interface RefreshButtonProps {
  onClickRefresh: () => void;
}

const RefreshButton = ({ onClickRefresh }: RefreshButtonProps) => {
  return (
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
  );
};

export default RefreshButton;
