import { KeywordsType } from "./Cafe";

export interface ProfileType {
  nickname: string;
  picture: string;
  reviewCount: number;
}

export type SortType = "RECENT" | "UPCOMING";
export type PlanStatusType = "SAVED" | "SHARED";

export interface PlanDataType {
  id: number;
  keywordName: string;
  location: string;
  visitDateTime: string;
}

export interface MyReviewType {
  cafeId: number;
  cafeName: string;
  reviewId: number;
  starRating: number;
  content: string;
  specialNote: string;
  createdDate: string;
  imageUrls: {
    originUrl: string;
    thumbnailUrl: string;
  }[];
  keywords: KeywordsType[];
}

export interface ReviewDataType {
  reviews: MyReviewType[];
}
