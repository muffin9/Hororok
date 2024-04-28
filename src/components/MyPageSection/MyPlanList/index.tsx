import useUserPlanMutation from "@/Hooks/Api/mypage/useUserPlanMutation";
import MyPlanCard from "../MyPlanCard";
import { SortType } from "@/interfaces/user";
import { useState } from "react";

const MyPlanList = () => {
  const [saveSort, setSaveSort] = useState<SortType>("RECENT");
  const [shareSort, setShareSort] = useState<SortType>("RECENT");
  const [isAllData, setIsAllData] = useState(false);

  const { userPlanData: userSaveData, deletePlan: deleteSavePlan } =
    useUserPlanMutation(saveSort, "saved");
  const { userPlanData: userShareData, deletePlan: deleteSharePlan } =
    useUserPlanMutation(shareSort, "shared");

  return (
    <div className="flex flex-col gap-6 py-6 px-4">
      <MyPlanCard
        dataType="saved"
        planData={userSaveData}
        sort={saveSort}
        setSort={setSaveSort}
        deleteFunc={deleteSavePlan}
      />
      <MyPlanCard
        dataType="shared"
        planData={userShareData}
        sort={shareSort}
        setSort={setShareSort}
        deleteFunc={deleteSharePlan}
      />
    </div>
  );
};

export default MyPlanList;
