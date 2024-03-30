import useMoreData from "@/Hooks/useMoreData";
import MoreButton from "@/components/common/MoreButton";
import Text from "@/components/common/Text";
import { CafeMenuType } from "@/interfaces/Cafe";

interface MenuInfoProps {
  moreButton?: boolean;
  cafeMenuInfo: CafeMenuType[];
}

const MenuInfo = ({ moreButton, cafeMenuInfo }: MenuInfoProps) => {
  const { showMore, handleClickMoreButton } = useMoreData();

  const visibleMenuData =
    !showMore && moreButton ? cafeMenuInfo.slice(0, 2) : cafeMenuInfo;

  return (
    <div className="h-full px-4 py-6 bg-white">
      <header>
        <Text size="large" weight="bold">
          메뉴
        </Text>
      </header>
      <div className="flex flex-col gap-3 mt-4">
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
                <Text size="medium" weight="bold" className="text-primary-300">
                  {menuData.price}
                </Text>
              </div>
            </div>
          );
        })}
      </div>

      {moreButton && cafeMenuInfo.length >= 3 && !showMore && (
        <div className="w-[calc(100%)] h-[1px] relative bg-gray-200 mt-[33px] mb-[38px]">
          <MoreButton
            text={"메뉴 더보기"}
            handleClickMoreButton={handleClickMoreButton}
          />
        </div>
      )}
    </div>
  );
};

export default MenuInfo;
