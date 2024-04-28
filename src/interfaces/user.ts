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
