import { CafeInfoType } from "@/interfaces/Cafe";
import create from "zustand";
import { persist } from "zustand/middleware";

interface searchResultListState {
  searchResultList: CafeInfoType[];
  setSearchResultList: (list: CafeInfoType[]) => void;
}

const persistedSearchPlaceState = persist<searchResultListState>(
  (set) => ({
    searchResultList: [],
    setSearchResultList: (result) => set({ searchResultList: result }),
  }),
  {
    name: "search-result-list-place",
  }
);

const useSearcResultListStorehPlace = create(persistedSearchPlaceState);

export default useSearcResultListStorehPlace;
