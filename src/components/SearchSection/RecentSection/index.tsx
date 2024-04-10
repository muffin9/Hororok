import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import useSearchHistory from "@/store/searchHistory";
import useSearchInput from "@/store/searchInput";
import { useEffect } from "react";

interface RecentSectionProps {
  onClickRecentSearch: (search: string) => void;
}

const RecentSection = ({ onClickRecentSearch }: RecentSectionProps) => {
  const { recentSearches, deleteSearch } = useSearchHistory();
  const { resetSearchInputValue } = useSearchInput();

  useEffect(() => {
    resetSearchInputValue();
  }, []);

  const onClickRemoveButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    search: string
  ) => {
    e.stopPropagation();
    deleteSearch(search);
  };

  return (
    <section>
      <Text size="large" weight="bold" className="px-4 text-black">
        최근검색
      </Text>
      {recentSearches.map((search) => {
        return (
          <div
            key={search}
            className="w-full h-16 flex justify-between items-center border-b-[1px] border-silver cursor-pointer"
            onClick={() => onClickRecentSearch(search)}
          >
            <div className="flex items-center gap-1.5 px-4">
              <Icon type="marker" size="medium" alt="marker" />
              <Text size="medium" className="text-black">
                {search}
              </Text>
            </div>
            <button
              onClick={(e) => onClickRemoveButton(e, search)}
              className="px-4"
            >
              <Icon type="close" size="xSmall" alt="close" />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default RecentSection;
