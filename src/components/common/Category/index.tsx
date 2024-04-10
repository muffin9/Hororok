import Text from "@/components/common/Text";
import Icon from "@/components/common/Icon";
import { useState } from "react";

interface CategoryProps {
  name: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

const Category = ({ name, onClick }: CategoryProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="w-fit flex items-center h-8 gap-[2px] px-3 text-gray-800 text-sm rounded-lg border-solid border-[1px] border-gray-400 enabled:hover:border-primary-300 cursor-pointer enabled:hover:bg-subcolor enabled:hover:text-primary-300 bg-white"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text size="extraSmall">{name}</Text>
      <Icon
        type={isHovered ? "arrow_under_hover" : "arrow_under"}
        size="xSmall"
        alt="더보기"
      />
    </button>
  );
};

export default Category;
