import useMoreData from "@/Hooks/useMoreData";
import Icon from "@/components/common/Icon";
import MoreButton from "@/components/common/MoreButton";
import Text from "@/components/common/Text";
import { PlanDataType, SortType, PlanStatusType } from "@/interfaces/user";
import { UseMutateAsyncFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface MyPlanCardProps {
  dataType: PlanStatusType;
  planData: PlanDataType[];
  sort: SortType;
  setSort: React.Dispatch<React.SetStateAction<SortType>>;
  deleteFunc: UseMutateAsyncFunction<
    AxiosResponse<any, any>,
    Error,
    {
      planId: number;
      planStatus: PlanStatusType;
    },
    unknown
  >;
}

const MyPlanCard = ({
  dataType,
  planData,
  sort,
  setSort,
  deleteFunc,
}: MyPlanCardProps) => {
  const { showMore, handleClickMoreButton } = useMoreData();
  return (
    <div>
      <header>
        <div className="flex gap-1">
          <Text size="large" weight="bold">
            {dataType === "saved" ? "저장한 여정" : "공유한 여정"}
          </Text>
        </div>
        <div className="flex gap-2 ml-2">
          <button
            className={sort === "RECENT" ? "text-gray-800" : "text-gray-700"}
            onClick={() => setSort("RECENT")}
          >
            최신 저장 순
          </button>
          <span className="text-gray-800">&#183;</span>
          <button
            className={sort === "UPCOMING" ? "text-gray-800" : "text-gray-700"}
            onClick={() => setSort("UPCOMING")}
          >
            다가올 여정 순
          </button>
        </div>
      </header>
      <article>
        {planData &&
          planData.map((data) => {
            return (
              <div key={data.id} className="flex justify-between">
                <div className="flex gap-2">
                  <button className="flex justify-center items-center px-3 py-[7px] border-[1px] border-solid border-gray-300">
                    {data.keywordName}
                  </button>
                  <div>
                    <Text size="medium" weight="bold">
                      {data.location}
                    </Text>
                    <Text size="medium">{data.visitDateTime}</Text>
                  </div>
                </div>
                <button onClick={() => deleteFunc}>
                  <Icon size="small" type="close" alt="delete plan" />
                </button>
              </div>
            );
          })}
      </article>
      {planData && planData.length >= 3 && !showMore && (
        <div className="w-[calc(100%)] h-[1px] relative bg-gray-200 mt-[33px] mb-[38px]">
          <MoreButton
            text={"전체보기"}
            handleClickMoreButton={handleClickMoreButton}
          />
        </div>
      )}
    </div>
  );
};

export default MyPlanCard;
