import { useCookies } from "react-cookie";
export const useTokenCookies = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const setAccessToken = (accessToken: string) => {
    setCookie("accessToken", accessToken, { path: "/" });
  };

  const getAccessToken = () => {
    return cookies.accessToken;
  };

  const removeAccessToken = () => {
    removeCookie("accessToken", { path: "/" });
  };

  return { setAccessToken, getAccessToken, removeAccessToken };
};
