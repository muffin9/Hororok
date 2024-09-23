import { CategoryKeywordsType } from "@/interfaces/Cafe";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface categoryFilterKeywordState {
  categoryFilterKeywords: CategoryKeywordsType;
  setCategoryFilterKeywords: (
    newCategoryFilterKeywords: CategoryKeywordsType,
  ) => void;
  resetFilterKeywords: () => void;
}

const initCategoryFilterKeywords = {
  purpose: [],
  facility: [],
  atmosphere: [],
  menu: [],
  theme: [],
};

const persistedCategoryKeywordStore = persist<categoryFilterKeywordState>(
  (set) => ({
    categoryFilterKeywords: initCategoryFilterKeywords,
    setCategoryFilterKeywords: (
      newCategoryFilterKeywords: CategoryKeywordsType,
    ) => set({ categoryFilterKeywords: newCategoryFilterKeywords }),
    resetFilterKeywords: () =>
      set({ categoryFilterKeywords: initCategoryFilterKeywords }),
  }),
  { name: "categoryFilterKeyword-store" },
);

const useCategoryFilterKeywordStore = create(persistedCategoryKeywordStore);

export default useCategoryFilterKeywordStore;
