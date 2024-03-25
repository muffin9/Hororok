type SizeType =
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "xLarge"
  | "extraLarge";
type WeightType = "light" | "normal" | "medium" | "bold";

interface TextProps {
  children: React.ReactNode;
  size: SizeType;
  weight?: WeightType;
  className?: string;
}

const textSizes = {
  extraSmall: "text-xs",
  small: "text-sm",
  medium: "text-md",
  large: "text-lg",
  xLarge: "text-4xl",
  extraLarge: "text-5xl",
};

const textWeights = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

export default function Text({
  size,
  weight = "normal",
  children,
  className,
}: TextProps) {
  const textSize = textSizes[size];
  const textWeight = textWeights[weight];

  return (
    <span className={`${textSize} ${textWeight} ${className}`}>{children}</span>
  );
}
