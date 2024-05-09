import { IconType } from "@/components/common/Icon";
import { CategoryKeywordsType } from "./Cafe";

export interface CombinationType {
  id: number;
  name: string;
  icon: IconType;
}

export interface CombinationGetType extends CombinationType {
  categoryKeywords: CategoryKeywordsType;
}
