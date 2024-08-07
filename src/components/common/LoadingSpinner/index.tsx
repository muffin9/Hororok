type SizeType = "small" | "medium" | "large" | "xLarge";

interface LoadingSpinnerProps {
  size: SizeType;
}

const selectSize = {
  small: `w-4 h-4 border-2 m-[-2px]`,
  medium: `w-8 h-8 border-[3px] m-[-4px]`,
  large: `w-12 h-12 border-4 m-[-8px]`,
  xLarge: `w-20 h-20 border-[6px] m-[12px]`,
};

const LoadingSpinner = ({ size = "large" }: LoadingSpinnerProps) => (
  <div
    className={`${selectSize[size]} animate-spin rounded-full border-2 border-solid border-white border-y-primary-300`}
  />
);

export default LoadingSpinner;
