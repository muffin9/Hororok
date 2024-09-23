import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchHistoryState {
  recentSearches: string[];
  addSearch: (searchQuery: string) => void;
  deleteSearch: (searchQuery: string) => void;
}

const persistedState = persist<SearchHistoryState>(
  (set) => ({
    recentSearches: [],

    addSearch: (searchQuery) =>
      set((state) => {
        if (!state.recentSearches.includes(searchQuery)) {
          const updatedSearches = [
            searchQuery,
            ...state.recentSearches.slice(0, 10),
          ];
          return { ...state, recentSearches: updatedSearches };
        }
        return state; // 중복된 검색어가 있으면 상태를 변경하지 않음
      }),

    deleteSearch: (searchQuery) =>
      set((state) => ({
        ...state,
        recentSearches: state.recentSearches.filter(
          (query) => query !== searchQuery,
        ),
      })),
  }),
  {
    name: "search-history",
  },
);

const useSearchHistory = create(persistedState);

export default useSearchHistory;
