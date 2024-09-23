import create from "zustand";
import { persist } from "zustand/middleware";

interface SearchInputState {
  searchInputValue: string;
  setSearchInputValue: (value: string) => void;
  resetSearchInputValue: () => void;
}

const persistedSearchInputState = persist<SearchInputState>(
  (set) => ({
    searchInputValue: "",
    setSearchInputValue: (value) => set({ searchInputValue: value }),
    resetSearchInputValue: () => set({ searchInputValue: "" }),
  }),
  {
    name: "search-input",
  },
);

const useSearchInput = create(persistedSearchInputState);

export default useSearchInput;
