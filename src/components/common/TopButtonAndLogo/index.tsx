"use client";

import Image from "next/image";
import BackButton from "../BackButton";
import { logoImage } from "@/app/constants";
import { useRouter } from "next/navigation";
import usePlanStore from "@/store/usePlanStore";

export default function TopButtonAndLogo() {
  const router = useRouter();
  const { resetPlanStore } = usePlanStore();

  return (
    <nav className="w-[380px] pl-2 py-2 flex justify-between bg-white z-[1000]">
      <BackButton />
      <button
        onClick={() => {
          resetPlanStore();
          router.push("/map");
        }}
      >
        <Image
          src={logoImage}
          width={36}
          height={36}
          alt="cafecok logo"
          className="rounded-lg"
        />
      </button>
      <div className="w-[36px]" />
    </nav>
  );
}
