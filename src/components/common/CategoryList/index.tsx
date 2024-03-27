import Category from "@/components/common/Category";
import Icon from "@/components/common/Icon";

interface CategoryListProps {
  onFilter?: () => void;
}

const CategoryList = ({ onFilter }: CategoryListProps) => {
  const categoryNames = [
    { id: 1, name: "목적" },
    { id: 2, name: "시설" },
    { id: 3, name: "분위기" },
    { id: 4, name: "메뉴" },
    { id: 5, name: "테마" },
  ];

  return (
    <div className="flex gap-[4px]">
      {categoryNames.map((tag) => {
        return (
          <Category
            key={tag.id}
            name={tag.name}
            icon={<Icon type="arrow_under" size="xSmall" alt="더보기" />}
            posIcon="right"
            onClick={onFilter || (() => {})}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
