interface ToggleButtonProps {
  isToggle: boolean;
  setIsToggle: () => void;
}

const ToggleButton = ({ isToggle, setIsToggle }: ToggleButtonProps) => {
  return (
    <button
      onClick={setIsToggle}
      className={`w-[40px] h-[24px] rounded-2xl px-[2px] ${
        isToggle ? "bg-primary-300" : "bg-bluegray"
      }`}
      style={{ transition: "background-color 0.3s" }}
    >
      <div
        className="w-[20px] h-[20px] bg-white rounded-full"
        style={{
          transform: isToggle ? "translateX(16px)" : "translateX(0)",
          transition: "transform 0.3s",
        }}
      />
    </button>
  );
};

export default ToggleButton;
