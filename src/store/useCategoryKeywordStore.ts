import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CategoryKeywordsType {
  [key: string]: string[];
}

interface categoryKeywordState {
  categoryKeywords: CategoryKeywordsType;
  setCategoryKeywords: (newCategoryKeywords: CategoryKeywordsType) => void;
  resetKeywords: () => void;
}

const initCategoryKeywords = {
  purpose: [],
  facility: [],
  atmosphere: [],
  menu: [],
  theme: [],
};

const persistedCategoryKeywordStore = persist<categoryKeywordState>(
  (set) => ({
    categoryKeywords: initCategoryKeywords,
    setCategoryKeywords: (newCategoryKeywords: CategoryKeywordsType) =>
      set({ categoryKeywords: newCategoryKeywords }),
    resetKeywords: () => set({ categoryKeywords: initCategoryKeywords }),
  }),
  { name: "categoryKeyword-store" }
);

const useCategoryKeywordStore = create(persistedCategoryKeywordStore);

export default useCategoryKeywordStore;
