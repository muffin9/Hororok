"use client";

import SaveCreateEdit from "@/components/SaveSection/SaveCreateEdit";
import TopNavigation from "@/components/common/TopNavigation";
import { useSearchParams } from "next/navigation";

type FolderIdProps = {
  params: { id: string };
};

export default function SaveCreateEditPage({ params }: FolderIdProps) {
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
