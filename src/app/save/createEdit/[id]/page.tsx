"use client";

import SaveCreateEdit from "@/components/SaveSection/SaveCreateEdit";
import TopNavigation from "@/components/common/TopNavigation";
import { useSearchParams } from "next/navigation";

export default function SaveCreateEditPage({
  params,
}: {
  params: { id: string };
}) {
  const searchParams = useSearchParams();
  const folderName = searchParams.get("folderName");
  const color = searchParams.get("color");
  const isVisible = searchParams.get("isVisible");
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="폴더 수정하기" />
      <SaveCreateEdit
        paramId={+params.id}
        paramFolderName={folderName}
        paramColor={color}
        paramIsVisible={Boolean(isVisible)}
      />
    </main>
  );
}
