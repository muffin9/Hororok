"use client";

import { logoutUser } from "@/apis/user";
import Text from "@/components/common/Text";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MySetting = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await logoutUser();
    router.push("/map");
  };

  return (
    <section>
      <div className="bg-white">
        <div>
          <button className="p-4" onClick={() => router.push("/improvement")}>
            <Text size="medium">개선의견 남기기</Text>
          </button>
          <div className="h-[1px] bg-silver" />
          <div className="p-4">
            <Link
              href="https://www.notion.so/poten-tim-hororok/9e46487a97fa44be83cac811f05414e3?pvs=4"
              target="_blank"
            >
              <Text size="medium">개인정보 처리방침</Text>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[10px] bg-gray-200" />
      <div className="p-4">
        <button onClick={handleLogout}>
          <Text size="medium" className="text-gray-800">
            로그아웃
          </Text>
        </button>
      </div>
      <div className="h-[1px] bg-silver" />
      <div className="p-4">
        <button onClick={() => router.push("/myPage/secession")}>
          <Text size="medium" className="text-gray-800">
            회원탈퇴
          </Text>
        </button>
      </div>
    </section>
  );
};

export default MySetting;
