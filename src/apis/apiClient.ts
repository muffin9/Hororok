import { apiSearchUrl } from "@/app/constants";
import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create();

const isLoginRequiredForURL = (url: string) => {
  const targetURLs = [
    `${apiSearchUrl}/reviews`,
    `${apiSearchUrl}/bookmark/folders`,
    `${apiSearchUrl}/bookmark/folder/save`,
    new RegExp(`${apiSearchUrl}/bookmark/folder/(\\d+)`),
    `${apiSearchUrl}/bookmark/folder/update`,
    new RegExp(`${apiSearchUrl}/bookmark/folder/(\\d+)/delete`),
    new RegExp(`${apiSearchUrl}/bookmark/folder/(\\d+)/update/visible`),
    `${apiSearchUrl}/bookmark/save`,
    new RegExp(`${apiSearchUrl}/bookmark/(\\d+)/delete`),
    `${apiSearchUrl}/myPage/profile`,
    `${apiSearchUrl}/myPage/saved/plans`,
    `${apiSearchUrl}/myPage/shared/plans`,
    new RegExp(`${apiSearchUrl}/myPage/plan/(\\d+)`),
    `${apiSearchUrl}/myPage/reviews`,
    `${apiSearchUrl}/myPage/combination`,
    `${apiSearchUrl}/myPage/setting`,
    `${apiSearchUrl}/review/create`,
    new RegExp(`${apiSearchUrl}/review/(\\d+)`),
    new RegExp(`${apiSearchUrl}/review/(\\d+)/delete`),
    new RegExp(`${apiSearchUrl}/review/(\\d+)/edit`),
    `${apiSearchUrl}/plan/save`,
    `${apiSearchUrl}/plan/share`,
    new RegExp(`${apiSearchUrl}/plan/(\\d+)/delete`),
    `${apiSearchUrl}/cafe/find/bar`,
    new RegExp(`${apiSearchUrl}/combination/create`),
    new RegExp(`${apiSearchUrl}/combination/(\\d+)`),
    new RegExp(`${apiSearchUrl}/combination/(\\d+)/edit`),
    `${apiSearchUrl}/auth/logout`,
  ];

  return targetURLs.some((targetURL) => {
    if (typeof targetURL === "string") {
      return url.startsWith(targetURL);
    } else if (targetURL instanceof RegExp) {
      return targetURL.test(url);
    }
    return false;
  });
};

axiosInstance.interceptors.request.use(async (config: any) => {
  const isLoginRequired = isLoginRequiredForURL(config.url);
  const accessToken = localStorage.getItem("accessToken");
  const accessTokenExpiration = localStorage.getItem("accessTokenExpiration");

  if (isLoginRequired && accessToken) {
    const currentTime = new Date().getTime();
    if (
      accessTokenExpiration &&
      parseFloat(accessTokenExpiration) < currentTime
    ) {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response: AxiosResponse<any> = await axios.post(
          `${apiSearchUrl}/auth/refresh`,
          {
            refreshToken,
          }
        );

        const newAccessToken = response.data.accessToken;
        const expirationTime = currentTime + 6 * 60 * 60 * 1000;
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem(
          "accessTokenExpiration",
          expirationTime.toString()
        );
      } catch (error) {
        console.error("Failed to refresh accessToken:", error);
      }
    }

    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosInstance;
