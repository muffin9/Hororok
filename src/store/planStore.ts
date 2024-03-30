import create from "zustand";
import { persist } from "zustand/middleware";

interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface FormDataType {
  longitude: number;
  latitude: number;
  minutes: number;
  date: string;
  startTime: Time;
  endTime: Time;
  keywords: string[];
}

interface planStoreState {
  isWriting: boolean;
  currentStep: string;
  formData: FormDataType;
  setIsWrting: (isWrite: boolean) => void;
  setCurrentStep: (newStep: string) => void;
  setFormData: (data: Partial<FormDataType>) => void;
  resetPlanStore: () => void;
}

const initialFormData: FormDataType = {
  longitude: 0,
  latitude: 0,
  minutes: 0,
  date: "",
  startTime: {
    hour: 0,
    minute: 0,
    second: 0,
    nano: 0,
  },
  endTime: {
    hour: 0,
    minute: 0,
    second: 0,
    nano: 0,
  },
  keywords: [],
};

const persistedPlanStore = persist<planStoreState>(
  (set) => ({
    isWriting: false,
    currentStep: "1",
    formData: initialFormData,
    setFormData: (newFormData: Partial<FormDataType>) =>
      set((state) => ({
        formData: { ...state.formData, ...newFormData },
      })),
    setIsWrting: (isWrite: boolean) => set({ isWriting: isWrite }),
    setCurrentStep: (newStep: string) => set({ currentStep: newStep }),
    resetPlanStore: () =>
      set({
        isWriting: false,
        currentStep: "1",
        formData: initialFormData,
      }),
  }),
  {
    name: "plan-store", // 영구 저장소에 사용될 키 이름
  }
);

const usePlanStore = create(persistedPlanStore);

export default usePlanStore;
