import { apiSearchUrl } from "@/app/constants";
import axiosInstance from "./apiClient";
import { SortType, PlanStatusType } from "@/interfaces/user";

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get(`${apiSearchUrl}/mypage/profile`);
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
      `${apiSearchUrl}/mypage/${status}/plan?sortBy=${sort}&page=${page}&size=${size}`
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getUserSharePlan = async (sort: SortType) => {
  try {
    const response = await axiosInstance.get(
      `${apiSearchUrl}/mypage/shared/plan?sortBy=${sort}`
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
