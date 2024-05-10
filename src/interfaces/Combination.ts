import { IconType } from "@/components/common/Icon";
import { CategoryKeywordsType } from "./Cafe";

export interface CombinationType {
  id: number;
  name: string;
  icon: IconType;
}

export interface PatchCombinationType {
  name: string;
  icon: IconType;
  keywords: string[];
}

export interface CombinationGetType extends CombinationType {
  categoryKeywords: CategoryKeywordsType;
}
