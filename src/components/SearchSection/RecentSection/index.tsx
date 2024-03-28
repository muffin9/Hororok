import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import useSearchHistory from "@/store/searchHistory";

const RecentSection = () => {
  const { recentSearches, deleteSearch } = useSearchHistory();

  return (
    <section>
      <Text size="large" weight="bold" className="text-black">
        최근검색
      </Text>
      {recentSearches.map((search) => {
        return (
          <div
            key={search}
            className="w-full h-16 flex justify-between items-center border-b-[1px] border-silver cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <Icon type="marker" size="medium" alt="marker" />
              <Text size="medium" className="text-black">
                {search}
              </Text>
            </div>
            <button onClick={() => deleteSearch(search)}>
              <Icon type="close" size="xSmall" alt="close" />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default RecentSection;
