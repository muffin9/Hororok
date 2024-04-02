import { apiSearchUrl } from "@/app/constants";
import { FormPostDataType } from "@/interfaces/Plan";

import axios from "axios";

export const postSearchListToPlan = async (formData: FormPostDataType) => {
  try {
    const response = await axios.post(`${apiSearchUrl}/plans`, formData);

    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
