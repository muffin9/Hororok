import create from "zustand";

interface SearchHistoryState {
  recentSearches: string[];
  addSearch: (searchQuery: string) => void;
  deleteSearch: (searchQuery: string) => void;
}

const useSearchHistory = create<SearchHistoryState>((set) => ({
  recentSearches: [],

  addSearch: (searchQuery) =>
    set((state) => {
      if (!state.recentSearches.includes(searchQuery)) {
        const updatedSearches = [
          searchQuery,
          ...state.recentSearches.slice(0, 10),
        ];
        return { recentSearches: updatedSearches };
      }
      return state; // 중복된 검색어가 있으면 상태를 변경하지 않음
    }),

  deleteSearch: (searchQuery) =>
    set((state) => ({
      recentSearches: state.recentSearches.filter(
        (query) => query !== searchQuery
      ),
    })),
}));

export default useSearchHistory;
