import { SearchPlaceInfoType } from "@/interfaces/SearchPlace";
import create from "zustand";
import { persist } from "zustand/middleware";

interface SearchPlaceState {
  resultSearchInfo: SearchPlaceInfoType[];
  setResultSearchInfo: (result: SearchPlaceInfoType[]) => void;
}

const persistedSearchPlaceState = persist<SearchPlaceState>(
  (set) => ({
    resultSearchInfo: [],
    setResultSearchInfo: (result) => set({ resultSearchInfo: result }),
  }),
  {
    name: "search-place",
  },
);

const useSearchPlace = create(persistedSearchPlaceState);

export default useSearchPlace;
