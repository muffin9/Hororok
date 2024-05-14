import Input from "@/components/common/Input";
import Icon from "@/components/common/Icon";
import BackButton from "@/components/common/BackButton";
import useSearchInput from "@/store/searchInput";
import RollingInput from "@/components/common/RollingInput";

declare global {
  interface Window {
    kakao: any;
  }
}

interface SearchInputProps {
  handleKeyUpSearchInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ handleKeyUpSearchInput }: SearchInputProps) => {
  const { searchInputValue, setSearchInputValue } = useSearchInput();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleClear = () => {
    setSearchInputValue("");
  };

  return (
    <div className="w-full h-[50px] px-4 flex relative">
      <div className="h-6 absolute top-1/2 transform -translate-y-1/2">
        <BackButton />
      </div>
      <RollingInput
        type="text"
        value={searchInputValue}
        placeholderTexts={[
          "어디 근처 카페 찾으세요?",
          "어떤 카페 정보가 궁금하세요?",
        ]}
        onChange={handleChange}
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyUpSearchInput(e)
        }
        autofocus={true}
      />
      {searchInputValue && (
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
          onClick={handleClear}
        >
          <Icon type="close" alt="close" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
