import { CategoryKeywordsType } from "@/store/useCategoryKeywordStore";

export interface ReviewInfoType {
  cafeId: string;
  content: string;
  specialNote: string;
  categoryKeywords: CategoryKeywordsType;
  starRating: string;
  files: File[];
}
