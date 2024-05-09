import useGetMyCombination from "@/Hooks/Api/myPage/useGetMyCombination";
import { CombinationType } from "@/interfaces/Combination";
import Text from "../common/Text";
import Icon from "../common/Icon";
import { useRouter } from "next/navigation";
import CombinationTooltip from "./Tooltip";
import useIsLoggedIn from "@/Hooks/useLoggedIn";

const CombinationSection = () => {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();
  const { myCombination } = useGetMyCombination();

  const handleAddButton = () => {
    if (isLoggedIn) {
      router.push("/combination/createEdit");
    } else {
      alert("로그인이 필요합니다.");
      router.push("/login");
    }
  };

  return (
    <section>
      {myCombination ? (
        <div className="flex flex-col gap-3">
          {myCombination.combinations?.map((combination: CombinationType) => {
            <button
              id={`${combination.id}`}
              className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full"
              onClick={() =>
                router.push(`/combination/createEdit/${combination.id}`)
              }
            >
              <Text size="large">{combination.icon}</Text>
            </button>;
          })}
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <CombinationTooltip />
          <button
            className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full"
            onClick={handleAddButton}
          >
            <Icon size="small" type="plus" alt="plus" />
          </button>
        </div>
      )}
    </section>
  );
};

export default CombinationSection;
