import { apiSearchUrl } from "@/app/constants";
import axios, { AxiosInstance } from "axios";

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
    `${apiSearchUrl}/myPage/plan/(\\d+)`,
    `${apiSearchUrl}/myPage/reviews`,
    `${apiSearchUrl}/review/create`,
    `${apiSearchUrl}/review/(\\d+)`,
    `${apiSearchUrl}/review/(\\d+)/delete`,
    `${apiSearchUrl}/review/(\\d+)/edit`,
    `${apiSearchUrl}/plan/save`,
    `${apiSearchUrl}/plan/share`,
    `${apiSearchUrl}/plan/(\\d+)/delete`,
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

axiosInstance.interceptors.request.use((config: any) => {
  const isLoginRequired = isLoginRequiredForURL(config.url);
  const accessToken = localStorage.getItem("accessToken");

  if (isLoginRequired && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosInstance;
