import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import Image from "next/image";

interface ReviewInfoProps {
  moreButton?: boolean;
}

const ReviewInfo = ({ moreButton }: ReviewInfoProps) => {
  return (
    <div className="border-b-[1px] border-solid border-gray-200 px-4 py-6 bg-white">
      <header className="flex justify-between">
        <div className="flex gap-3">
          <Image
            src={"/assets/Images/profile.png"}
            width={44}
            height={44}
            alt="profile image"
          />
          <div className="flex flex-col gap-[6px]">
            <Text size="small">춘식이</Text>
            <div className="flex">
              <Icon type="star" size="xSmall" alt="star" />
              <Icon type="star" size="xSmall" alt="star" />
              <Icon type="star" size="xSmall" alt="star" />
              <Icon type="star" size="xSmall" alt="star" />
              <Icon type="star" size="xSmall" alt="star" />
            </div>
          </div>
        </div>
        <Text size="extraSmall" className="text-gray-700">
          2024.03.12
        </Text>
      </header>
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-4 mt-7">
          <div className="flex items-center gap-3">
            <Icon size="small" type="review" alt="review" />
            <Text size="small">이 카페는 이런점이 좋았어요</Text>
          </div>
          <div className="flex items-center gap-3">
            <Icon size="small" type="star" alt="star" />
            <Text size="small">콘센트 없는 자리가 많아요.</Text>
          </div>
        </div>
        <div className="flex gap-1.5 overflow-scroll">
          <Image
            src={"/assets/Images/profile.png"}
            width={100}
            height={100}
            alt="sample image"
            className="rounded-lg"
          />
          <Image
            src={"/assets/Images/profile.png"}
            width={100}
            height={100}
            alt="sample image"
            className="rounded-lg"
          />
          <Image
            src={"/assets/Images/profile.png"}
            width={100}
            height={100}
            alt="sample image"
            className="rounded-lg"
          />
          <Image
            src={"/assets/Images/profile.png"}
            width={100}
            height={100}
            alt="sample image"
            className="rounded-lg"
          />
        </div>
        <div className="flex items-center gap-[6px]">
          <Text size="small" className="text-gray-800">
            추천해요
          </Text>
          <div className="text-gray-800 mb-[3px]">|</div>
          <div className="flex gap-1.5">
            <button className="h-[31px] px-3 rounded-3xl border-[1px] border-solid border-silver">
              <Text size="small">아메리카노</Text>
            </button>
            <button className="h-[31px] px-3 rounded-3xl border-[1px] border-solid border-silver">
              <Text size="small">민트초코</Text>
            </button>
            <button className="h-[31px] px-3 rounded-3xl border-[1px] border-solid border-silver">
              <Text size="small">민트초코</Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewInfo;
