import { CategoryKeywordsType } from "./Cafe";

export interface ReviewInfoType {
  cafeId: number;
  cafeName: string;
  reviewId: number;
  starRating: number;
  content: string;
  specialNote: string;
  images: {
    id: number;
    imageUrl: string[];
  }[];
  categoryKeywords: CategoryKeywordsType;
}

export interface ReviewPostInfoType {
  cafeId: string;
  content: string;
  specialNote: string;
  keywords: CategoryKeywordsType;
  starRating: string;
  files: File[];
}

export interface ReviewPatchInfoType {
  content: string;
  specialNote: string;
  starRating: string;
  keywords: CategoryKeywordsType;
  deletedImageIds: number[];
  files: File[];
}
