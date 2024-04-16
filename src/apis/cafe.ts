import { apiSearchUrl } from "@/app/constants";
import axiosInstance from "./apiClient";

export const getCafeDetailInfo = async (cafeId: string) => {
  try {
    const response = await axiosInstance(`${apiSearchUrl}/cafe/${cafeId}`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
