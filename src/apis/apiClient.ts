import { apiSearchUrl } from "@/app/constants";
import axios, { AxiosInstance, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create();

let isRefreshing = false;
let failedQueue: { resolve: any; reject: any }[] = [];

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
    `${apiSearchUrl}/review/create`,
    new RegExp(`${apiSearchUrl}/review/(\\d+)`),
    new RegExp(`${apiSearchUrl}/review/(\\d+)/delete`),
    new RegExp(`${apiSearchUrl}/review/(\\d+)/edit`),
    `${apiSearchUrl}/plan/save`,
    `${apiSearchUrl}/plan/share`,
    new RegExp(`${apiSearchUrl}/plan/(\\d+)/delete`),
    `${apiSearchUrl}/cafe/find/bar`,
    new RegExp(`${apiSearchUrl}/combination/(\\d+)`),
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

axiosInstance.interceptors.response.use(undefined, async (error: any) => {
  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {
    if (isRefreshing) {
      try {
        const response: AxiosResponse<any> = await new Promise(
          (resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }
        );
        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response: AxiosResponse<any> = await axios.post(
        `${apiSearchUrl}/auth/refresh`,
        {
          refreshToken,
        }
      );

      const newAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return axiosInstance(originalRequest);
    } catch (error) {
      console.error("Failed to refresh accessToken:", error);
      return Promise.reject(error);
    } finally {
      isRefreshing = false;
    }
  }

  return Promise.reject(error);
});

export default axiosInstance;
