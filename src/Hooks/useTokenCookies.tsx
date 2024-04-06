import { useCookies } from "react-cookie";
export const useTokenCookies = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const setRefreshToken = (refreshToken: string) => {
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const removeRefreshToken = () => {
    removeCookie("refreshToken", { path: "/" });
  };

  return { cookies, setRefreshToken, removeRefreshToken };
};
