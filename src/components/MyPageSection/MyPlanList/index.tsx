import useUserPlanMutation from "@/Hooks/Api/mypage/useUserPlanMutation";
import MyPlanCard from "../MyPlanCard";
import { PlanStatusType, SortType } from "@/interfaces/user";
import { useState } from "react";

const MyPlanList = () => {
  const [saveSort, setSaveSort] = useState<SortType>("RECENT");
  const [shareSort, setShareSort] = useState<SortType>("RECENT");

  const [isAllData, setIsAllData] = useState(false);
  const [allDataType, setAllDataType] = useState<PlanStatusType>("saved");
  const [allData, setAllData] = useState([]);

  const { userPlanData: userSaveData, deletePlan: deleteSavePlan } =
    useUserPlanMutation(saveSort, "saved");
  const { userPlanData: userShareData, deletePlan: deleteSharePlan } =
    useUserPlanMutation(shareSort, "shared");

  const handleReceiveAllData = () => {
    // TODO: 보류..
    setIsAllData(true);
  };

  return (
    <div className="flex flex-col gap-6 py-6 px-4">
      {isAllData ? (
        <MyPlanCard
          dataType={allDataType}
          planData={allData}
          sort={allDataType === "saved" ? saveSort : shareSort}
          setSort={allDataType === "saved" ? setSaveSort : setShareSort}
          deleteFunc={
            allDataType === "saved" ? deleteSavePlan : deleteSharePlan
          }
        />
      ) : (
        <>
          <MyPlanCard
            dataType="saved"
            planData={userSaveData}
            sort={saveSort}
            setSort={setSaveSort}
            deleteFunc={deleteSavePlan}
            handleReceiveAllData={handleReceiveAllData}
          />
          <MyPlanCard
            dataType="shared"
            planData={userShareData}
            sort={shareSort}
            setSort={setShareSort}
            deleteFunc={deleteSharePlan}
            handleReceiveAllData={handleReceiveAllData}
          />
        </>
      )}
    </div>
  );
};

export default MyPlanList;
