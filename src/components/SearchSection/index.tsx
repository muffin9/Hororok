"use client";

import SearchInput from "@/components/SearchSection/SearchInput";
import RecentSection from "./RecentSection";
import { useRouter } from "next/navigation";
import useSearchInput from "@/store/searchInput";
import useHandleKeySearchInput from "@/Hooks/useHandleKeySearchInput";

const SearchSection = () => {
  const { setSearchInputValue } = useSearchInput();
  const { searchAddressToCoordinate, handleKeyUpSearchInput } =
    useHandleKeySearchInput();

  const router = useRouter();

  const onClickRecentSearch = (search: string) => {
    setSearchInputValue(search);
    (document.activeElement as HTMLElement).blur();

    searchAddressToCoordinate(search);
    router.push("/search/result");
  };

  return (
    <section className="py-8 px-4">
      <SearchInput handleKeyUpSearchInput={handleKeyUpSearchInput} />
      <div className="mt-4">
        <RecentSection onClickRecentSearch={onClickRecentSearch} />
      </div>
    </section>
  );
};

export default SearchSection;
