import { apiSearchUrl } from "@/app/constants";
import { ReviewInfoType } from "@/interfaces/Review";

import axiosInstance from "./apiClient";

export const postAddReview = async (reviewData: ReviewInfoType) => {
  try {
    const response = await axiosInstance.post(
      `${apiSearchUrl}/reviews`,
      reviewData
    );

    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
