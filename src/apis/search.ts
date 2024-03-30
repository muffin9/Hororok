import { apiSearchUrl } from "@/app/constants";
import axios from "axios";

export const getSearchList = async (latitude: number, longitude: number) => {
  try {
    const response = await axios(
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
  keywords: string[]
) => {
  try {
    const response = await axios(
      `${apiSearchUrl}/search/bar?latitude=${latitude}&longitude=${longitude}&keywords=${keywords.join(",")}`
    );

    return response.data.cafes;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getReSearch = async (latitude: number, longitude: number) => {
  try {
    const response = await axios(
      `${apiSearchUrl}/search/re?latitude=${latitude}&longitude=${longitude}`
    );

    return response.data.cafes;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
