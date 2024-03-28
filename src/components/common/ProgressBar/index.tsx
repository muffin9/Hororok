interface ProgressBarProps {
  currentStep: "1" | "2" | "3" | "4";
  bgColor: string;
}

const WidthSize = {
  "1": "w-1/3",
  "2": "w-1/2",
  "3": "w-3/4",
  "4": "w-full",
};

const ProgressBar = ({ currentStep, bgColor }: ProgressBarProps) => {
  return (
    <div className="max-w-[390px] w-full flex justify-start mt-4 bg-bluegray rounded-lg">
      <div
        className={`${WidthSize[currentStep]} h-[6px] ${bgColor} rounded-lg`}
      />
    </div>
  );
};

export default ProgressBar;
