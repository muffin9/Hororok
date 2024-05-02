import { CategoryKeywordsType } from "@/interfaces/Cafe";

export const convertRequestKeywords = (
  categoryKeywords: CategoryKeywordsType
) => {
  return Object.values(categoryKeywords).reduce(
    (accumulator: string[], currentValue: string[]) => {
      return accumulator.concat(currentValue);
    },
    []
  );
};
