import { apiSearchUrl } from "@/app/constants";
import axiosInstance from "./apiClient";

export const getBookmark = async () => {
  try {
    const response = await axiosInstance.get(
      `${apiSearchUrl}/bookmark/folders`,
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getFolderList = async (folderId: number) => {
  try {
    const response = await axiosInstance(
      `${apiSearchUrl}/bookmark/folder/${folderId}`,
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const postFolder = async () => {
  try {
    const response = await axiosInstance.post(
      `${apiSearchUrl}/bookmark/folder/save`,
    );
    return response.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
