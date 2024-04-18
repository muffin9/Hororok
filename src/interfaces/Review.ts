import { CategoryKeywordsType } from "./Cafe";

export interface ReviewInfoType {
  cafeId: string;
  content: string;
  specialNote: string;
  categoryKeywords: CategoryKeywordsType;
  starRating: string;
  files: File[];
}
