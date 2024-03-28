import { CategoryIdType } from "@/components/Home/HomeSection";
import Category from "@/components/common/Category";
import Icon from "@/components/common/Icon";

interface CategoryListProps {
  onClickCategory: (id: CategoryIdType) => void;
}

type CategoryType = {
  id: CategoryIdType;
  name: "목적" | "시설" | "분위기" | "메뉴" | "테마";
};

const CategoryList = ({ onClickCategory }: CategoryListProps) => {
  const categoryNames = [
    { id: "purpose", name: "목적" },
    { id: "facility", name: "시설" },
    { id: "atmosphere", name: "분위기" },
    { id: "menu", name: "메뉴" },
    { id: "theme", name: "테마" },
  ] as CategoryType[];

  return (
    <div className="flex gap-[4px]">
      {categoryNames.map((tag: CategoryType) => {
        return (
          <Category
            key={tag.id}
            name={tag.name}
            icon={<Icon type="arrow_under" size="xSmall" alt="더보기" />}
            posIcon="right"
            onClick={() => onClickCategory(tag.id)}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
