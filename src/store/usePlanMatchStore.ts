import { persist } from "zustand/middleware";
import { create } from "zustand";
import { PlanMatchType } from "@/interfaces/Cafe";

export interface PlanMatchState {
  resultPlanInfos: PlanMatchType;
  setMatchPlan: (newMatchPlan: PlanMatchType) => void;
}

const initialPlanMatch = {
  planId: 0,
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
  { name: "planMatch-store" },
);

const usePlanMatchStore = create(persistedPlanMatchStore);

export default usePlanMatchStore;
