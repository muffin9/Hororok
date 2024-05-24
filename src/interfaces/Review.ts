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
    origin: string;
    thumbnail: string;
  }[];
  categoryKeywords: CategoryKeywordsType;
}

export interface ReviewPostInfoType {
  cafeId: number;
  content: string;
  specialNote: string;
  keywords: string[];
  starRating: number;
}

export interface ReviewPatchInfoType {
  content: string;
  specialNote: string;
  starRating: number;
  keywords: string[];
  deletedImageIds: number[];
  files: File[];
}
