import FolderEdit from "@/components/SaveSection/FolderEdit";
import TopNavigation from "@/components/common/TopNavigation";

const FolderEditPage = () => {
  const dummyFolderDatas = [
    {
      id: 1,
      color: "#FE8282",
      cafeName: "브루클린커피",
      address: "서울 동작구 노량진로 26",
    },
    {
      id: 2,
      color: "#FE8282",
      cafeName: "브루클린커피",
      address: "서울 동작구 노량진로 26",
    },
    {
      id: 3,
      color: "#FE8282",
      cafeName: "브루클린커피",
      address: "서울 동작구 노량진로 26",
    },
  ];
  // axios get save values to FolderEdit
  return (
    <main className="h-full flex flex-col bg-white">
      <TopNavigation title="" />
      <FolderEdit saveData={dummyFolderDatas} />
    </main>
  );
};

export default FolderEditPage;
