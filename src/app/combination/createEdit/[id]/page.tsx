"use client";

import useGetCombination from "@/Hooks/Api/combination/useGetCombination";
import CombinationEdit from "@/components/CombinationEdit";
import TopNavigation from "@/components/common/TopNavigation";

export default function CombinationEditPage({
  params,
}: {
  params: { id: string };
}) {
  const { combination } = useGetCombination(params.id);

  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="" />
      {combination && <CombinationEdit combination={combination} />}
    </main>
  );
}
