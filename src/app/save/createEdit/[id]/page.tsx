"use client";

import SaveCreateEdit from "@/components/SaveSection/SaveCreateEdit";
import TopNavigation from "@/components/common/TopNavigation";

type FolderIdProps = {
  params: { id: string };
};

export default function SaveCreateEditPage({ params }: FolderIdProps) {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="폴더 수정하기" />
      <SaveCreateEdit paramId={+params.id} />
    </main>
  );
}
