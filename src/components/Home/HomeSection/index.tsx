import FilterSection from "@/components/FilterSection";

import GNB from "@/components/common/GNB";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import CategoryList from "@/components/common/CategoryList";
import useHandleFilterSection from "@/Hooks/useHandleFilterSection";

interface HomeSectionProps {
  isInput?: boolean;
}

export type CategoryIdType = "목적" | "시설" | "분위기" | "메뉴" | "테마";

const HomeSection = ({ isInput }: HomeSectionProps) => {
  const router = useRouter();
  const { categoryId, isFilter, setIsFilter, onClickCategory } =
    useHandleFilterSection();

  return (
    <section className="relative">
      {isInput && (
        <div className="px-4">
          <Input
            type="text"
            placeholder="어디 근처 카페 찾으세요?"
            onClick={() => router.push("/search")}
            className="w-full h-[50px] p-4 bg-white border-[1px] border-gray-400 rounded-lg focus:outline-none"
          />
        </div>
      )}
      {isFilter ? (
        <FilterSection
          categoryId={categoryId}
          onCloseButton={() => setIsFilter(false)}
        />
      ) : (
        <>
          <div className="px-4 mt-4">
            <CategoryList onClickCategory={onClickCategory} />
          </div>
          <GNB />
        </>
      )}
    </section>
  );
};

export default HomeSection;
