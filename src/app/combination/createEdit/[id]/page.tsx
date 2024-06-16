"use client";

import { getCombination } from "@/apis/combination";
import CombinationEdit from "@/components/CombinationEdit";
import TopNavigation from "@/components/common/TopNavigation";
import { CombinationGetType } from "@/interfaces/Combination";
import { useEffect, useState } from "react";

export default function CombinationEditPage({
  params,
}: {
  params: { id: string };
}) {
  const [combination, setCombination] = useState<CombinationGetType>();

  useEffect(() => {
    async function fetchCombinationData() {
      const data = await getCombination(params.id);
      setCombination(data);
    }

    fetchCombinationData();
  }, [params.id]);

  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="" />
      {combination && <CombinationEdit combination={combination} />}
    </main>
  );
}
