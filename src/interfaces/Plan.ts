import { CategoryKeywordsType } from "./Cafe";

export interface FormPostDataType {
  longitude: number;
  latitude: number;
  minutes: number;
  date: string;
  startTime: string;
  endTime: string;
  categoryKeywords: CategoryKeywordsType;
  locationName: string;
}
