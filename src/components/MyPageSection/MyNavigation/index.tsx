"use client";

import BackButton from "@/components/common/BackButton";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { useRouter } from "next/navigation";

interface MyNavigationProps {
  title: string;
}

export default function MyNavigation({ title }: MyNavigationProps) {
  const router = useRouter();
  return (
    <nav className="flex justify-between p-4">
      <BackButton />
      <Text size="medium">{title}</Text>
      <button onClick={() => router.push("/myPage/setting")}>
        <Icon size="small" type="setting" alt="setting" />
      </button>
    </nav>
  );
}
