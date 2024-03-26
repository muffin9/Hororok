import Text from "@/components/common/Text";
import { SearchPlaceInfoType } from "@/interfaces/SearchPlace";

interface SearchResultSectionProps {
  resultSearchInfo: SearchPlaceInfoType[];
  onClickPlace: (place_id: number) => void;
}

const SearchResultSection = ({
  resultSearchInfo,
  onClickPlace,
}: SearchResultSectionProps) => {
  return (
    <section>
      {resultSearchInfo.map((data) => {
        return (
          <div
            key={data.place_id}
            className="w-full h-20 flex justify-between items-center border-b-[1px] border-silver cursor-pointer"
            onClick={() => onClickPlace(data.place_id)}
          >
            <div className="flex flex-col">
              <Text size="large" className="text-primary-300">
                {data.place_name}
              </Text>
              <Text size="medium" className="text-gray-700">
                {data.address}
              </Text>
            </div>
            <Text size="small" className="text-gray-700">
              9.3km
            </Text>
          </div>
        );
      })}
    </section>
  );
};

export default SearchResultSection;
