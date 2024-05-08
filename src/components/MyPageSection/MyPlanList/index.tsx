import useUserPlanMutation from "@/Hooks/Api/myPage/useUserPlanMutation";
import MyPlanCard from "../MyPlanCard";
import { SortType } from "@/interfaces/user";
import { useEffect, useState } from "react";
import Text from "@/components/common/Text";

const MyPlanList = () => {
  const [saveSort, setSaveSort] = useState<SortType>("RECENT");
  const [shareSort, setShareSort] = useState<SortType>("RECENT");
  const [isAllData, setIsAllData] = useState(false);

  const {
    userSaveData,
    deletePlan: deleteSavePlan,
    refetchSaveData,
  } = useUserPlanMutation(saveSort, "saved");
  const {
    userShareData,
    deletePlan: deleteSharePlan,
    refetchShareData,
  } = useUserPlanMutation(shareSort, "shared");

  useEffect(() => {
    refetchSaveData();
  }, [saveSort]);

  useEffect(() => {
    refetchShareData();
  }, [shareSort]);

  return (
    <div className="flex flex-col gap-6 py-6">
      {!userSaveData && !userShareData ? (
        <div className="h-screen flex justify-center items-center text-center px-4">
          <Text size="small" className="text-gray-600" weight="bold">
            저장한 여정이 없어요. <br /> 원하는 조건에 맞는 카페를 찾으러
            가볼까요?
          </Text>
        </div>
      ) : (
        <>
          {userSaveData && (
            <MyPlanCard
              dataType="saved"
              planData={userSaveData}
              sort={saveSort}
              setSort={setSaveSort}
              deleteFunc={deleteSavePlan}
            />
          )}
          {userShareData && (
            <MyPlanCard
              dataType="shared"
              planData={userShareData}
              sort={shareSort}
              setSort={setShareSort}
              deleteFunc={deleteSharePlan}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MyPlanList;
