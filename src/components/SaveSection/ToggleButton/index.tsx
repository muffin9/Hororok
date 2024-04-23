import useBookMarkMutation from "@/Hooks/Api/useBookMarkMutation";

interface ToggleButtonProps {
  folderId?: number;
  isVisible: boolean;
}

const ToggleButton = ({ folderId, isVisible }: ToggleButtonProps) => {
  const { toggleVisible } = useBookMarkMutation();

  const handleToggle = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (folderId) toggleVisible(folderId);
  };

  return (
    <button
      id={`${folderId}`}
      onClick={handleToggle}
      className={`w-[40px] h-[24px] rounded-2xl px-[2px] ${
        isVisible ? "bg-primary-300" : "bg-bluegray"
      }`}
      style={{ transition: "background-color 0.3s" }}
    >
      <div
        className="w-[20px] h-[20px] bg-white rounded-full"
        style={{
          transform: isVisible ? "translateX(16px)" : "translateX(0)",
          transition: "transform 0.3s",
        }}
      />
    </button>
  );
};

export default ToggleButton;
