import { create } from "zustand";

interface ToastState {
  message: string;
  showToast: boolean;
  showMessage: (message: string) => void;
  hideMessage: () => void;
}

const useToastStore = create<ToastState>((set) => ({
  message: "",
  showToast: false,
  showMessage: (message) => {
    set({ message, showToast: true });
    setTimeout(() => {
      set({ showToast: false });
    }, 1000);
  },
  hideMessage: () => set({ showToast: false }),
}));

export default useToastStore;
