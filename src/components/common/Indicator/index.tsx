interface IndicatorProps {
  count: number;
  currentIdx: number;
}

const Indicator = ({ count, currentIdx }: IndicatorProps) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }, (_, idx) => (
        <div
          key={idx}
          className={`w-[6px] h-[6px] ${idx <= currentIdx ? "bg-primary-300" : "bg-bluegray"} rounded-full`}
        ></div>
      ))}
    </div>
  );
};

export default Indicator;
