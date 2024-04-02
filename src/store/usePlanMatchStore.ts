import { persist } from "zustand/middleware";
import { CategoryKeywordsType } from "./useCategoryKeywordStore";
import { create } from "zustand";

export interface CafeType {
  createdDate: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  phoneNumber: string;
  roadAddress: string;
  longitude: number;
  latitude: number;
  starRating: number;
  reviewCount: number;
  imageUrl: string;
}

interface PlanMatchType {
  matchType: string;
  locationName: string;
  minutes: number;
  visitDateTime: string;
  categoryKeywords: CategoryKeywordsType;
  recommendCafes: CafeType[];
  matchCafes: CafeType[];
  similarCafes: CafeType[];
}

export interface PlanMatchState {
  resultPlanInfos: PlanMatchType;
  setMatchPlan: (newMatchPlan: PlanMatchType) => void;
}

const initialPlanMatch = {
  matchType: "SIMILAR",
  locationName: "",
  minutes: 0,
  visitDateTime: "",
  categoryKeywords: {
    purpose: [],
    facility: [],
    atmosphere: [],
    menu: [],
    theme: [],
  },
  recommendCafes: [],
  matchCafes: [],
  similarCafes: [],
};

const persistedPlanMatchStore = persist<PlanMatchState>(
  (set) => ({
    resultPlanInfos: initialPlanMatch,
    setMatchPlan: (newMatchPlan: PlanMatchType) =>
      set({ resultPlanInfos: newMatchPlan }),
  }),
  { name: "planMatch-store" }
);

const usePlanMatchStore = create(persistedPlanMatchStore);

export default usePlanMatchStore;
