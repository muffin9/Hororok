import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between px-4">
      <div className="flex gap-3">
        <div
          className="w-[44px] h-[44px] rounded-full"
          style={{
            backgroundImage: `url(https://picsum.photos/id/237/200/300)`,
          }}
        />
        <div className="flex flex-col">
          <Text size="medium" weight="bold">
            현재는 더미데이터 입니다...
          </Text>
          <div className="flex gap-1">
            <Text size="extraSmall" className="text-gray-700">
              리뷰
            </Text>
            <Text size="extraSmall" className="text-gray-800">
              58
            </Text>
          </div>
        </div>
      </div>
      <button
        className="flex gap-1 items-center"
        onClick={() => router.push("/mypage/edit")}
      >
        <Text size="small" className="text-gray-700">
          프로필 수정
        </Text>
        <Icon size="xSmall" type="arrow_right" alt="arrow_right" />
      </button>
    </div>
  );
};

export default Profile;
