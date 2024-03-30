import { apiSearchUrl } from "@/app/constants";
import axios from "axios";

export const getSearchList = async (latitude: number, longitude: number) => {
  try {
    const response = await axios(
      `${apiSearchUrl}/search/bar?latitude=${latitude}&longitude=${longitude}`
    );

    return response.data.cafe;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
