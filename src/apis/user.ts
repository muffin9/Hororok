import { apiSearchUrl } from "@/app/constants";
import axiosInstance from "./apiClient";
import { SortType, PlanStatusType } from "@/interfaces/user";

export const getMyPage = async () => {
  try {
    const response = await axiosInstance.get(`${apiSearchUrl}/myPage`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get(`${apiSearchUrl}/myPage/profile`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getUserPlanData = async (
  sort: SortType,
  status: PlanStatusType,
  page: number,
  size: number
) => {
  try {
    const response = await axiosInstance.get(
      `${apiSearchUrl}/myPage/${status}/plans?sortBy=${sort}&page=${page}&size=${size}`
    );
    return response.data.plans;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getUserReview = async () => {
  try {
    const response = await axiosInstance.get(`${apiSearchUrl}/myPage/reviews`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getUserCombination = async () => {
  try {
    const response = await axiosInstance.get(
      `${apiSearchUrl}/myPage/combination`
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const logoutUser = async () => {
  try {
    await axiosInstance.post(`${apiSearchUrl}/auth/logout`);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessTokenExpiration");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
