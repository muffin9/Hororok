import { apiSearchUrl } from "@/app/constants";
import axiosInstance from "./apiClient";

export const getCafeTopInfo = async (cafeId: string) => {
  try {
    const response = await axiosInstance(`${apiSearchUrl}/cafe/${cafeId}/top`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getCafeBasicInfo = async (cafeId: string) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/cafe/${cafeId}/basicInfo`
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getCafeMenuInfo = async (cafeId: string) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/cafe/${cafeId}/menus`
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getCafePhotoInfo = async (
  cafeId: string,
  cursor: number,
  page: string
) => {
  const cafeImageUrl =
    page === "all"
      ? `${apiSearchUrl}/cafe/${cafeId}/images/all`
      : `${apiSearchUrl}/cafe/${cafeId}/images`;
  try {
    const response = await axiosInstance(cafeImageUrl);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getCafeReviewInfo = async (
  cafeId: string,
  cursor: number,
  page: string
) => {
  const cafeReviewUrl = cursor
    ? `${apiSearchUrl}/cafe/${cafeId}/reviews?cursor=${cursor}`
    : `${apiSearchUrl}/cafe/${cafeId}/reviews`;
  try {
    const response = await axiosInstance(cafeReviewUrl);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
