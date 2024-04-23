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
    new RegExp(`${apiSearchUrl}/bookmark/delete/(\\d+)`),
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
