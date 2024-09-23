import { apiSearchUrl } from "@/app/constants";
import axiosInstance from "./apiClient";

export const getCombination = async (combinationId: string) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/combination/${combinationId}`,
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
