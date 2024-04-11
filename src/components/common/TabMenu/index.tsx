import Text from "../Text";

interface TabMenuProps {
  menuInfo: { id: string; name: string; isClicked: boolean }[];
  handleOnMenuClick: (clickedId: string) => void;
}

const TabMenu = ({ menuInfo, handleOnMenuClick }: TabMenuProps) => {
  return (
    <nav className="flex justify-between px-4 pt-6 text-black border-b-[1px] border-solid border-silver bg-white">
      {menuInfo.map((menu) => {
        return (
          <button
            key={menu.id}
            className={`w-[90px] pb-4 font-bold text-gray-700 ${menu.isClicked && "border-b-[2px]"} border-solid border-black`}
            onClick={() => handleOnMenuClick(menu.id)}
          >
            <Text
              size="medium"
              weight="bold"
              className={`${menu.isClicked ? "text-black" : "text-gray-700"}`}
            >
              {menu.name}
            </Text>
          </button>
        );
      })}
    </nav>
  );
};

export default TabMenu;
