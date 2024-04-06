import { apiSearchUrl } from "@/app/constants";
import { CategoryKeywordsType } from "@/store/useCategoryKeywordStore";
import axiosInstance from "./apiClient";

export const getSearchList = async (latitude: number, longitude: number) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/search/bar?latitude=${latitude}&longitude=${longitude}`
    );

    return response.data.cafes;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getSearchListByKeywords = async (
  latitude: number,
  longitude: number,
  categoryKeywords: CategoryKeywordsType
) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/search/bar?latitude=${latitude}&longitude=${longitude}&keywords=${Object.entries(categoryKeywords).join(",")}`
    );

    return response.data.cafes;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getReSearch = async (latitude: number, longitude: number) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/search/re?latitude=${latitude}&longitude=${longitude}`
    );

    return response.data.cafes;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
