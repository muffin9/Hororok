import useGetPhotoInfo from "@/Hooks/Api/useGetPhotoInfo";
import useMoreData from "@/Hooks/useMoreData";
import Icon from "@/components/common/Icon";
import MoreButton from "@/components/common/MoreButton";
import Text from "@/components/common/Text";
import { CafePhotoInfoType } from "@/interfaces/Cafe";
import { useMemo } from "react";

interface PhotoInfoProps {
  cafeId: string;
  page?: string;
}

const PhotoInfo = ({ cafeId, page = "" }: PhotoInfoProps) => {
  const { photoInfo }: { photoInfo: CafePhotoInfoType } = useGetPhotoInfo(
    cafeId,
    1,
    page
  );

  const { showMore, handleClickMoreButton } = useMoreData();

  const photoInfoImageUrlsLen = useMemo(
    () => photoInfo?.imageUrls.length,
    [photoInfo]
  );

  const visiblePhotoData =
    !showMore && page !== "all"
      ? photoInfo?.imageUrls.slice(0, 4)
      : photoInfo?.imageUrls;

  return (
    <div className="h-full flex flex-col py-6 bg-white">
      <header className="px-4">
        <Text size="large" weight="bold">
          사진
        </Text>
      </header>
      {photoInfoImageUrlsLen === 0 ? (
        <div className="h-full flex flex-col justify-center items-center">
          <Icon type="camera" size="xLarge" alt="camera" />
          <Text size="small" weight="bold" className="text-gray-600">
            아직 등록된 사진이 없어요
          </Text>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-1 mt-4">
          {visiblePhotoData?.map((imageUrl: string) => {
            return (
              <div
                key={imageUrl}
                style={{ backgroundImage: `url(http:${imageUrl})` }}
                className={"w-[176px] h-[176px] rounded-lg"}
              />
            );
          })}
          {photoInfoImageUrlsLen >= 5 && !showMore && page !== "all" && (
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
