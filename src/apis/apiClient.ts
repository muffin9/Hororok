import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create();

const isLoginRequiredForURL = (url: string) => {
  return url.startsWith(`${process.env.NEXT_PUBLIC_SERVER_API}/reviews`);
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
