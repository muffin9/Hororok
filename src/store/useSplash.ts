import create from "zustand";

interface SearchInputState {
  showSplash: boolean;
  setShowSplash: (value: boolean) => void;
}

const useSplashState = create<SearchInputState>((set) => ({
  showSplash: false,
  setShowSplash: (value) => set({ showSplash: value }),
}));

export default useSplashState;
