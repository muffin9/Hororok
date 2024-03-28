import useMoreData from "@/Hooks/useMoreData";
import MoreButton from "@/components/common/MoreButton";
import Text from "@/components/common/Text";

interface MenuInfoProps {
  moreButton?: boolean;
}

const MenuInfo = ({ moreButton }: MenuInfoProps) => {
  const { showMore, handleClickMoreButton } = useMoreData();

  const menuDummyData = [
    { title: "메뉴1", price: "4,500원", menuImage: "bg-sampleImage" },
    { title: "메뉴2", price: "4,500원", menuImage: "bg-sampleImage" },
    { title: "메뉴3", price: "4,500원", menuImage: "bg-sampleImage" },
  ];

  console.log(showMore);
  const visibleMenuData = showMore ? menuDummyData : menuDummyData.slice(0, 2);

  return (
    <div className="h-full px-4 py-6 bg-white">
      <header>
        <Text size="large" weight="bold">
          메뉴
        </Text>
      </header>
      <div className="flex flex-col gap-3 mt-4">
        {visibleMenuData.map((menuData) => {
          return (
            <div className="flex gap-4" key={menuData.title}>
              <div
                className={`bg-sampleImage bg-cover bg-center w-[100px] h-[100px] rounded-lg`}
              ></div>
              <div className="flex flex-col">
                <Text size="medium" weight="bold" className="text-gray-650">
                  {menuData.title}
                </Text>
                <Text size="medium" weight="bold" className="text-primary-300">
                  {menuData.price}
                </Text>
              </div>
            </div>
          );
        })}
      </div>

      {moreButton && menuDummyData.length >= 3 && !showMore && (
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
