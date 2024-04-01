interface ProgressBarProps {
  bgColor: string;
  width: string;
  height?: string;
}

const ProgressBar = ({
  bgColor,
  width,
  height = "h-[6px]",
}: ProgressBarProps) => {
  return (
    <div className="flex justify-start mt-4 bg-bluegray rounded-lg">
      <div
        style={{ width: width }}
        className={`${height} ${bgColor} rounded-lg`}
      />
    </div>
  );
};

export default ProgressBar;
