import Text from "@/components/common/Text";

interface TagProps {
  tagName: string;
}

const Tag = ({ tagName }: TagProps) => {
  return (
    <div className="w-fit border-[1px] border-gray-400 cursor-pointer rounded-lg px-3">
      <Text size="small" className="text-black">
        {tagName}
      </Text>
    </div>
  );
};

export default Tag;
