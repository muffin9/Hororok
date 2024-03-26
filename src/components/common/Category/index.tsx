import Text from "@/components/common/Text";

interface CategoryProps {
  name: string;
  icon?: React.ReactNode;
  posIcon?: "left" | "right";
  onClick: () => void;
}

const Category = ({ name, icon, posIcon, onClick }: CategoryProps) => {
  return (
    <button
      className="w-fit flex items-center h-8 gap-[2px] px-3 text-gray-800 text-sm rounded-lg border-solid border-[1px] border-gray-400 enabled:hover:border-primary-300 cursor-pointer enabled:hover:bg-subcolor enabled:hover:text-primary-300 bg-white"
      onClick={onClick}
    >
      {posIcon === "left" && icon}
      <Text size="extraSmall">{name}</Text>
      {posIcon === "right" && icon}
    </button>
  );
};

export default Category;
