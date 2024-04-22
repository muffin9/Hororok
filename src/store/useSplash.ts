import create from "zustand";

interface SplashState {
  splash: boolean;
  setsplash: (value: boolean) => void;
}

const useSplash = create<SplashState>((set) => ({
  splash: false,
  setsplash: (value) => set({ splash: value }),
}));

export default useSplash;
