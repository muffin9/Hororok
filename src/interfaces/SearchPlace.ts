export interface SearchPlaceType {
  address_name: string;
  category_color: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface SearchPlaceInfoType {
  place_id: number;
  place_name: string;
  address: string;
  latitude: number;
  longitude: number;
  detail_link: string;
  distance: string;
}
