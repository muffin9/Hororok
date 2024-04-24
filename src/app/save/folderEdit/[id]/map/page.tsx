import TopNavigation from "@/components/common/TopNavigation";

type FolderIdProps = {
  params: { id: number };
};

const FolderEditMapPage = ({ params }: FolderIdProps) => {
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="" />
      {/* TODO Naver MAP 변경시 작업 예정.*/}
      <div>서비스 준비중 입니다...</div>
    </main>
  );
};

export default FolderEditMapPage;
