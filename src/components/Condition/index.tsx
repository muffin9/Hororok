import Text from "../common/Text";
import Tag from "../common/Tag";
import { CategoryIdType } from "../Home/HomeSection";
import { FilterDataType } from "@/interfaces/Cafe";
import Icon, { IconType } from "../common/Icon";
import { popularKeywords } from "@/app/constants";
import useModal from "@/Hooks/useModal";
import Modal from "../common/Modal";

interface ConditionProps {
  categoryId?: CategoryIdType;
  handlePopularItemClick: (
    keywords: {
      category: string;
      name: string;
    }[]
  ) => void;
  handleItemClick: (category: string, name: string) => void;
  checkSelected: (category: string, name: string) => boolean;
  calculatedPopularKeywordIds: () => string[];
  filterDatas: FilterDataType[];
  maxSelectCount: number;
}

const Condition = ({
  categoryId,
  handlePopularItemClick,
  handleItemClick,
  checkSelected,
  calculatedPopularKeywordIds,
  filterDatas,
  maxSelectCount,
}: ConditionProps) => {
  const { showModal, openModal, closeModal } = useModal();
  const sortedFilterData = () => {
    if (categoryId) {
      const clickedCategoryIdx = filterDatas.findIndex(
        (data) => data.category === categoryId
      );
      if (clickedCategoryIdx !== -1) {
        const clickedCategory = filterDatas.splice(clickedCategoryIdx, 1)[0];
        filterDatas.unshift(clickedCategory);
      }
      return filterDatas;
    } else return filterDatas;
  };

  return (
    <div className="py-6 border-silver">
      <div className="flex flex-col mb-8">
        <div className="relative flex gap-1 mb-4">
          <Icon size="small" type="heart" alt="heart" />
          <Text size="medium" weight="bold">
            카페콕 추천
          </Text>
          <button onClick={() => openModal()}>
            <Icon size="small" type="question" alt="question" />
          </button>
          {showModal && (
            <Modal
              title="카페콕 추천이란?"
              subTitle={`카페콕에서 자주 찾는 카페 테마를 선정했어요.\n추천 테마는 다음과 같은 키워드 조합을 뜻해요.\n\n카공하기좋은곳 = 노트북작업 + 콘센트 베이커리데이트 =\n아늑한휴식공간 = 독서/휴식 + 따뜻한 인테리어\n데이트/모임 + 베이커리\n\n\n추천 테마를 선택하고 더 쉽게 카페를 찾아보세요!`}
              okButtonText="확인했어요"
              okCallbackFunc={() => closeModal()}
              cancelCallbackFunc={() => closeModal()}
            />
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {popularKeywords.map((popular) => {
            const isPopularKeyword = calculatedPopularKeywordIds().includes(
              popular.id
            );
            return (
              <button
                className={`px-3 py-1 flex items-center gap-2 text-gray-800 border-solid border-[1px] ${isPopularKeyword ? "border-primary-300" : "border-gray-400"} ${isPopularKeyword ? "bg-subcolor" : "bg-white"} rounded-lg cursor-pointer`}
                onClick={() => handlePopularItemClick(popular.keywords)}
                key={popular.id}
              >
                <Icon
                  size="medium"
                  type={popular.type as IconType}
                  alt={popular.id}
                />
                <Text
                  size="small"
                  className={`${isPopularKeyword ? "text-primary-300" : "text-black"}`}
                >
                  {popular.text}
                </Text>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex gap-1 text-primary-300 pb-4">
        <Text size="small">최대 {maxSelectCount}개 선택할 수 있어요</Text>
      </div>
      {sortedFilterData().map((condition) => {
        return (
          <div key={condition.category} className="flex flex-col gap-4">
            <header className="flex items-center gap-2">
              <Text size="medium" weight="bold" className="text-black">
                {condition.title}
              </Text>
              {condition.subTitle && (
                <Text size="small" className="text-gray-800">
                  {condition.subTitle}
                </Text>
              )}
            </header>
            <div className="flex gap-2 flex-wrap mb-[30px]">
              {condition.data.map((name) => {
                return (
                  <Tag
                    key={name}
                    tagName={name}
                    isSelected={checkSelected(condition.category, name)}
                    handleItemClick={() =>
                      handleItemClick(condition.category, name)
                    }
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Condition;
