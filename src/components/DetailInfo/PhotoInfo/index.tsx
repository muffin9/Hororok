import useMoreData from "@/Hooks/useMoreData";
import Icon from "@/components/common/Icon";
import MoreButton from "@/components/common/MoreButton";
import Text from "@/components/common/Text";

interface PhotoInfoProps {
  moreButton?: boolean;
  cafePhotoInfo: string[];
}

const PhotoInfo = ({ moreButton, cafePhotoInfo }: PhotoInfoProps) => {
  const { showMore, handleClickMoreButton } = useMoreData();

  const visiblePhotoData =
    !showMore && moreButton ? cafePhotoInfo.slice(0, 4) : cafePhotoInfo;

  return (
    <div className="h-full flex flex-col py-6 bg-white">
      <header className="px-4">
        <Text size="large" weight="bold">
          사진
        </Text>
      </header>
      {cafePhotoInfo.length === 0 ? (
        <div className="h-full flex flex-col justify-center items-center">
          <Icon type="camera" size="xLarge" alt="camera" />
          <Text size="small" weight="bold" className="text-gray-600">
            아직 등록된 사진이 없어요
          </Text>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-1 mt-4">
          {visiblePhotoData.map((photoUrl: string) => {
            return (
              <div
                key={photoUrl}
                style={{ backgroundImage: `url(http:${photoUrl})` }}
                className={"w-[176px] h-[176px] rounded-lg"}
              />
            );
          })}
          {moreButton && cafePhotoInfo.length >= 5 && !showMore && (
            <div className="w-[calc(100%)] h-[1px] relative bg-gray-200 mt-[33px] mb-[20px]">
              <MoreButton
                text={"사진 더보기"}
                handleClickMoreButton={handleClickMoreButton}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoInfo;
