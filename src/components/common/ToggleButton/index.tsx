import { useState } from "react";

interface ToggleButtonProps {
  saveId?: number;
  isShow: boolean;
}

const ToggleButton = ({ saveId, isShow }: ToggleButtonProps) => {
  const [isActive, setIsActive] = useState<boolean>(isShow);

  const handleToggle = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <button
      id={`${saveId}`}
      onClick={handleToggle}
      className={`w-[40px] h-[24px] rounded-2xl px-[2px] ${
        isActive ? "bg-primary-300" : "bg-bluegray"
      }`}
      style={{ transition: "background-color 0.3s" }}
    >
      <div
        className="w-[20px] h-[20px] bg-white rounded-full"
        style={{
          transform: isActive ? "translateX(16px)" : "translateX(0)",
          transition: "transform 0.3s",
        }}
      />
    </button>
  );
};

export default ToggleButton;
