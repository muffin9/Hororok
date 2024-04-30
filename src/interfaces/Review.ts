import { CategoryKeywordsType } from "./Cafe";

export interface ReviewInfoType {
  cafeId: string;
  content: string;
  specialNote: string;
  keywords: CategoryKeywordsType;
  starRating: string;
  files: File[];
}
