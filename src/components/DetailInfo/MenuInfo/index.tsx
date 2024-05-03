import useGetCafeDetailInfo from "@/Hooks/Api/useGetCafeDetailInfo";
import useMoreData from "@/Hooks/useMoreData";
import MoreButton from "@/components/common/MoreButton";
import Text from "@/components/common/Text";
import { CafeMenuInfoType, CafeMenuType } from "@/interfaces/Cafe";

interface MenuInfoProps {
  cafeId: string;
  page?: string;
}

const MenuInfo = ({ cafeId, page }: MenuInfoProps) => {
  const { menuInfo }: { menuInfo: CafeMenuInfoType } =
    useGetCafeDetailInfo(cafeId);

  const { showMore, handleClickMoreButton } = useMoreData();

  const visibleMenuData =
    !showMore && page !== "all" ? menuInfo?.menus.slice(0, 2) : menuInfo?.menus;

  return (
    visibleMenuData && (
      <div className="h-full py-6 bg-white">
        <header className="px-4">
          <Text size="large" weight="bold">
            메뉴
          </Text>
        </header>
        <div className="flex flex-col gap-3 px-4 mt-4">
          {visibleMenuData.map((menuData: CafeMenuType) => {
            return (
              <div className="flex gap-4" key={menuData.name}>
                <div
                  className={`bg-cover bg-center w-[100px] h-[100px] rounded-lg`}
                  style={{ backgroundImage: `url(http:${menuData.imageUrl})` }}
                ></div>
                <div className="flex flex-col">
                  <Text size="medium" weight="bold" className="text-gray-650">
                    {menuData.name}
                  </Text>
                  <Text
                    size="medium"
                    weight="bold"
                    className="text-primary-300"
                  >
                    {menuData.price}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>

        {menuInfo.menus.length >= 3 && !showMore && page !== "all" && (
          <div className="w-[calc(100%)] h-[1px] relative bg-gray-200 mt-[33px] mb-[38px]">
            <MoreButton
              text={"메뉴 더보기"}
              handleClickMoreButton={handleClickMoreButton}
            />
          </div>
        )}
      </div>
    )
  );
};

export default MenuInfo;
