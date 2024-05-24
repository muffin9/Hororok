export interface KeywordsType {
  id: number;
  category: string;
  name: string;
}

export interface CafeTopInfoType {
  cafeId: number;
  cafeName: string;
  roadAddress: string;
  latitude: number;
  longitude: number;
  starRating: number;
  reviewCount: number;
  originUrl: string;
  thumbnailUrl: string;
  keywords: KeywordsType[];
}

export interface CafeBasicInfoType {
  roadAddress: string;
  openStatus: string;
  businessHours: string[];
  closedDay: string[];
  phoneNumber: string;
  menus: CafeMenuType[];
  imageUrls: {
    originUrl: string;
    thumbnailUrl: string;
  }[];
  userChoiceKeywords: {
    name: string;
    count: number;
  }[];
  reviews: ReviewType[];
}

export interface CafeMenuInfoType {
  menus: CafeMenuType[];
}

export interface CafePhotoInfoType {
  imageUrls: {
    originUrl: string;
    thumbnailUrl: string;
  }[];

  cursor?: number;
  hasNextPage?: boolean;
}

export interface CafeReviewType {
  userChoiceKeywords: {
    name: string;
    count: number;
  }[];
  reviews: ReviewType[];
}

export interface ReviewType {
  id: number;
  content: string;
  starRating: number;
  specialNote: string;
  createDate: string;
  picture: string;
  nickname: string;
  imageUrls: {
    originUrl: string;
    thumbnailUrl: string;
  }[];
  recommendMenus: string[];
}

export interface CafeInfoType {
  id: number;
  bookmarks: { bookmarkId: number; folderId: number }[];
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
  originUrl: string;
  thumbnailUrl: string;
}

export interface ReviewType {
  id: number;
  content: string;
  specialNote: string;
  images: { id: number; origin: string; thumbnail: string }[];
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
  bookmarks: { bookmarkId: number; folderId: number }[];
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
  planId: number;
  matchType: string;
  locationName: string;
  minutes: number;
  visitDateTime: string;
  categoryKeywords: CategoryKeywordsType;
  recommendCafes: CafeType[];
  matchCafes: CafeType[];
  similarCafes: CafeType[];
}
