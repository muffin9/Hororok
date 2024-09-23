import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserInfoType {
  email: string | null;
  nickname: string | null;
}

interface userInfoState {
  userInfo: UserInfoType;
  setUserInfo: (info: UserInfoType) => void;
}

const persistedUserInfoStore = persist<userInfoState>(
  (set) => ({
    userInfo: {
      email: null,
      nickname: null,
    },
    setUserInfo: (info) => set({ userInfo: info }),
  }),
  { name: "user-info" },
);

const useUserInfoStore = create(persistedUserInfoStore);

export default useUserInfoStore;
