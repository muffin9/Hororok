import { apiSearchUrl } from "@/app/constants";
import { CategoryKeywordsType } from "@/interfaces/Cafe";
import axiosInstance from "./apiClient";
import { convertRequestKeywords } from "@/utils";

export const getSearchList = async (latitude: number, longitude: number) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/cafe/find/bar?latitude=${latitude}&longitude=${longitude}`,
    );

    return response.data.cafes;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getSearchListByKeywords = async (
  latitude: number,
  longitude: number,
  categoryKeywords: CategoryKeywordsType,
) => {
  try {
    const response = await axiosInstance.post(
      `${apiSearchUrl}/cafe/find/keyword`,
      {
        latitude,
        longitude,
        keywords: convertRequestKeywords(categoryKeywords),
      },
    );

    return response.data.cafes;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getReSearch = async (latitude: number, longitude: number) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/cafe/find/again?latitude=${latitude}&longitude=${longitude}`,
    );

    return response.data.cafes;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
