import Icon from "../Icon";

interface StarProps {
  starSize: "xSmall" | "small" | "medium" | "large" | "xLarge";
  starScore: number;
}

const Star = ({ starSize, starScore }: StarProps) => {
  const filledStars = Array.from({ length: starScore }).map((_, index) => (
    <Icon key={`star-filled-${index}`} type="star" size={starSize} alt="star" />
  ));

  const emptyStars = Array.from({ length: 5 - starScore }).map((_, index) => (
    <Icon
      key={`star-empty-${index}`}
      type="starEmpty"
      size={starSize}
      alt="empty Star"
    />
  ));

  return (
    <div className="flex gap-[2px]">
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default Star;
