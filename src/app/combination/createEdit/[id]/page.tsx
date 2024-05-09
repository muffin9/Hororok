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
  const [combinationData, setCombinationData] = useState<CombinationGetType>();

  useEffect(() => {
    async function fetchReviewData() {
      const data = await getCombination(params.id);
      setCombinationData(data);
    }

    fetchReviewData();
  }, [params.id]);

  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="" />
      {combinationData && <CombinationEdit combinationData={combinationData} />}
    </main>
  );
}
