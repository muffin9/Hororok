"use client";

import TopNavigation from "@/components/common/TopNavigation";

type CombinationIdIdProps = {
  params: { id: string };
};

export default function CombinationEditPage({ params }: CombinationIdIdProps) {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="조합 추가" />
    </main>
  );
}
