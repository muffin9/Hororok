import { apiSearchUrl } from "@/app/constants";
import axiosInstance from "./apiClient";

export const getReviewInfo = async (reviewId: string) => {
  try {
    const response = await axiosInstance(`${apiSearchUrl}/review/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
