import { apiSearchUrl } from "@/app/constants";
import { FormDataType } from "@/store/\bplanStore";
import axios from "axios";

export const getSearchListToPlan = async (formData: FormDataType) => {
  try {
    const { latitude, longitude, minutes, date, startTime, endTime, keywords } =
      formData;

    const response = await axios(
      `${apiSearchUrl}/plans?latitude=${latitude}&longitude=${longitude}&minutes=${minutes}&date=${date}&startTime=${startTime.hour}:${startTime.minute}&endTime=${endTime.hour}:${endTime.minute}&keywords=${keywords.join(",")}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
