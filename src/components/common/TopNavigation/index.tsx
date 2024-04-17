import BackButton from "../BackButton";
import Text from "../Text";

interface TopNavigationProps {
  title: string;
}

export default function TopNavigation({ title }: TopNavigationProps) {
  return (
    <nav className="flex justify-between p-4">
      <BackButton />
      <Text size="medium">{title}</Text>
      <div />
    </nav>
  );
}
