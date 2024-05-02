import { KeywordsType } from "./Cafe";

export interface ProfileType {
  nickname: string;
  picture: string;
  reviewCount: number;
}

export type SortType = "RECENT" | "UPCOMING";
export type PlanStatusType = "saved" | "shared";

export interface PlanDataType {
  id: number;
  keyword: { id: number; category: string; name: string };
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
  images: {
    id: number | null;
    imageUrl: string;
  }[];
  keywords: KeywordsType[];
}

export interface ReviewDataType {
  reviews: MyReviewType[];
}
