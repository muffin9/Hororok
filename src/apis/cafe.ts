import { apiSearchUrl } from "@/app/constants";
import axios from "axios";

export const getCafeDetailInfo = async (cafeId: string) => {
  try {
    const response = await axios(`${apiSearchUrl}/detail/${cafeId}`);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
