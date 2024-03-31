import { apiSearchUrl } from "@/app/constants";

import axios from "axios";

export const postSearchListToPlan = async (formData: any) => {
  try {
    const response = await axios.post(`${apiSearchUrl}/plans`, formData);
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
