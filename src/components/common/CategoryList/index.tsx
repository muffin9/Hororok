import { CategoryIdType } from "@/components/Home/HomeSection";
import Category from "@/components/common/Category";

interface CategoryListProps {
  onClickCategory: (id: CategoryIdType) => void;
}

type CategoryType = {
  id: CategoryIdType;
  name: "목적" | "시설" | "분위기" | "메뉴" | "주제";
};

const CategoryList = ({ onClickCategory }: CategoryListProps) => {
  const categoryNames = [
    { id: "purpose", name: "목적" },
    { id: "facility", name: "시설" },
    { id: "atmosphere", name: "분위기" },
    { id: "menu", name: "메뉴" },
    { id: "theme", name: "주제" },
  ] as CategoryType[];

  return (
    <div className="flex gap-[4px]">
      {categoryNames.map((tag: CategoryType) => {
        return (
          <Category
            key={tag.id}
            name={tag.name}
            onClick={() => onClickCategory(tag.id)}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
