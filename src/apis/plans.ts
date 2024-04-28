import { apiSearchUrl } from "@/app/constants";
import { FormPostDataType } from "@/interfaces/Plan";

import axiosInstance from "./apiClient";

export const postSearchListToPlan = async (formData: FormPostDataType) => {
  try {
    const response = await axiosInstance.post(`${apiSearchUrl}/plan`, formData);

    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const patchSavePlan = async (planId: number) => {
  try {
    const response = await axiosInstance.patch(
      `${apiSearchUrl}/plan/save`,
      planId
    );

    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const patchSharePlan = async (planId: number) => {
  try {
    const response = await axiosInstance.patch(
      `${apiSearchUrl}/plan/share`,
      planId
    );

    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
