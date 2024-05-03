import { apiSearchUrl } from "@/app/constants";
import axiosInstance from "./apiClient";
import { SortType, PlanStatusType } from "@/interfaces/user";

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
    return response.data;
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
