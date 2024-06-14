import useProfileMutation from "@/Hooks/Api/myPage/useProfileMutation";
import Loading from "@/app/loading";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import { ProfileType } from "@/interfaces/user";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const {
    myProfile,
    myProfileLoading,
  }: { myProfile: ProfileType; myProfileLoading: boolean } =
    useProfileMutation();

  if (myProfileLoading) return <Loading />;

  return (
    myProfile && (
      <div className="flex justify-between px-4">
        <div className="flex gap-3">
          <Image
            width={44}
            height={44}
            className="rounded-full"
            src={`${myProfile.picture === null ? "/assets/Images/default_profile.png" : `http://${myProfile.picture}`}`}
            alt="profile_image"
            layout="fixed"
          />
          <div className="flex flex-col">
            <Text size="medium" weight="bold">
              {myProfile.nickname}
            </Text>
            <div className="flex gap-1">
              <Text size="extraSmall" className="text-gray-700">
                리뷰
              </Text>
              <Text size="extraSmall" className="text-gray-800">
                {myProfile.reviewCount}
              </Text>
            </div>
          </div>
        </div>
        <button
          className="flex gap-1 items-center"
          onClick={() => router.push("/myPage/edit")}
        >
          <Text size="small" className="text-gray-700">
            프로필 수정
          </Text>
          <Icon size="xSmall" type="arrow_right" alt="arrow_right" />
        </button>
      </div>
    )
  );
};

export default Profile;
