import Icon from "../Icon";
import Text from "../Text";

interface StarProps {
  starScore: string;
}

const Star = ({ starScore }: StarProps) => {
  return (
    <div className="flex gap-[2px]">
      <Icon type="star" size="xSmall" alt="star" />
      <Text size="small" className="text-black">
        {starScore}
      </Text>
    </div>
  );
};

export default Star;
