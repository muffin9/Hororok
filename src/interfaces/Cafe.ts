export interface CafeInfoType {
  id: number;
  latitude: number;
  longitude: number;
  imageUrl: string;
  name: string;
  phoneNumber: string;
  starRating: string;
  reviewCount: number;
  roadAddress: string;
}

export interface CafeMenuType {
  name: string;
  price: string;
  imageUrl: string;
}

export interface ReviewType {
  id: number;
  content: string;
  specialNote: string;
  images: { id: number; imageUrl: string }[];
  keywords: CafeKeyWordType[];
  starRating: number;
  userNickname: string;
  createdDate: string;
}

export interface CafeKeyWordType {
  id: number;
  name: string;
  count?: number;
}

export interface CafeDetailInfoType {
  businessHours: string[];
  cafeImageUrls: string[];
  cafeKeywords: CafeKeyWordType[];
  cafeName: string;
  cafes: CafeInfoType[];
  closedDay: string[];
  exist: boolean;
  id: number;
  keywordsByCategory: { category: string; keywords: string[] }[];
  longitude: number;
  latitude: number;
  menus: CafeMenuType[];
  openStatus: string;
  phoneNumber: string;
  reviewCount: number;
  reviewImageUrls: string[];
  reviews: ReviewType[];
  roadAddress: string;
  starRating: string;
}

export interface CafeDefaultInfoType {
  roadAddress: string;
  openStatus: string;
  businessHours: string[];
  closedDay: string[];
  phoneNumber: string;
}

export interface FilterDataType {
  category: string;
  title: string;
  subTitle?: string;
  data: string[];
}

export interface CategoryKeywordsType {
  [key: string]: string[];
}

export interface CafeType {
  createdDate: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  phoneNumber: string;
  roadAddress: string;
  longitude: number;
  latitude: number;
  starRating: number;
  reviewCount: number;
  imageUrl: string;
}

export interface PlanMatchType {
  matchType: string;
  locationName: string;
  minutes: number;
  visitDateTime: string;
  categoryKeywords: CategoryKeywordsType;
  recommendCafes: CafeType[];
  matchCafes: CafeType[];
  similarCafes: CafeType[];
}
