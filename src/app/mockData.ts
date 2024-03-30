import { CafeDefaultInfoType, CafeDetailInfoType } from "@/interfaces/Cafe";

export const fakeCafeDetailInfo: CafeDetailInfoType = {
  businessHours: ["9:00 AM - 6:00 PM"],
  cafeImageUrls: [],
  cafeKeywords: [
    { id: 1, name: "keyword1" },
    { id: 2, name: "keyword2" },
  ],
  cafeName: "Example Cafe",
  cafes: [],
  closedDay: ["Sunday"],
  exist: true,
  id: 123,
  keywordsByCategory: [
    { category: "category1", keywords: ["keyword1", "keyword2"] },
  ],
  longitude: 123.456,
  latitude: 78.901,
  menus: [],
  openStatus: "Open",
  phoneNumber: "123-456-7890",
  reviewCount: 100,
  reviewImageUrls: [],
  reviews: [],
  roadAddress: "123 Main St, City, Country",
};

export const faceCafeDefaultInfo: CafeDefaultInfoType = {
  roadAddress: "123 Main St, City, Country",
  openStatus: "Open",
  businessHours: ["9:00 AM - 6:00 PM"],
  closedDay: ["Sunday"],
  phoneNumber: "123-456-7890",
};
