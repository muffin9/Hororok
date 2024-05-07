"use client";

import FilterSection from "@/components/FilterSection";

import GNB from "@/components/common/GNB";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import CategoryList from "@/components/common/CategoryList";
import useHandleFilterSection from "@/Hooks/useHandleFilterSection";

export type CategoryIdType =
  | "purpose"
  | "facility"
  | "atmosphere"
  | "menu"
  | "theme";

const HomeSection = () => {
  const router = useRouter();
  const { isFilter, setIsFilter, onClickCategory } = useHandleFilterSection();

  return (
    <section className="w-full absolute top-8 z-[999]">
      <div className="px-4">
        <Input
          type="text"
          placeholder="어디 근처 카페 찾으세요?"
          onClick={() => router.push("/search")}
          className="w-[358px] h-[50px] p-4 rounded-lg focus:outline-none shadow-default"
        />
      </div>

      {isFilter ? (
        <FilterSection setIsFilter={setIsFilter} />
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
