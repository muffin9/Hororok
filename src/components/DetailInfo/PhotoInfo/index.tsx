import useGetPhotoInfo from "@/Hooks/Api/useGetPhotoInfo";
import useMoreData from "@/Hooks/useMoreData";
import Icon from "@/components/common/Icon";
import MoreButton from "@/components/common/MoreButton";
import Text from "@/components/common/Text";
import { CafePhotoInfoType } from "@/interfaces/Cafe";
import { useMemo } from "react";

interface PhotoInfoProps {
  cafeId: string;
  handleOnMenuClick?: (clickedId: string) => void;
  page?: string;
}

const PhotoInfo = ({
  cafeId,
  handleOnMenuClick,
  page = "",
}: PhotoInfoProps) => {
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
        <>
          <div className="grid grid-cols-2 px-4 gap-4 mt-4">
            {visiblePhotoData?.map(
              (imageUrl: { originUrl: string; thumbnailUrl: string }) => {
                return (
                  <div
                    key={imageUrl.originUrl}
                    style={{
                      backgroundImage: `url(http:${imageUrl.thumbnailUrl})`,
                    }}
                    className={
                      "bg-cover bg-center w-[176px] h-[176px] rounded-lg"
                    }
                  />
                );
              }
            )}
          </div>
          {photoInfoImageUrlsLen >= 5 && !showMore && page !== "all" && (
            <div className="w-full h-[1px] relative bg-gray-200 mt-[33px] mb-[20px]">
              <MoreButton
                text={"사진 더보기"}
                handleClickMoreButton={() => {
                  if (handleOnMenuClick) {
                    handleClickMoreButton();
                    handleOnMenuClick("photo");
                  }
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PhotoInfo;
