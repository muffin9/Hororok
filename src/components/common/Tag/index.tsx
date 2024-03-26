import Text from "@/components/common/Text";

interface TagProps {
  tagName: string;
  isSelected: boolean;
  handleItemClick: () => void;
}

const Tag = ({ tagName, isSelected, handleItemClick }: TagProps) => {
  return (
    <button
      className={`w-fit border-[1px] ${isSelected ? "border-primary-300" : "border-gray-400"} cursor-pointer rounded-lg px-3 ${isSelected ? "bg-subcolor" : "bg-white"}`}
      onClick={handleItemClick}
    >
      <Text
        size="small"
        className={isSelected ? "text-primary-300" : "text-black"}
      >
        {tagName}
      </Text>
    </button>
  );
};

export default Tag;
