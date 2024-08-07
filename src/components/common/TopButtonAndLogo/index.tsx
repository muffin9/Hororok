"use client";

import Image from "next/image";
import BackButton from "../BackButton";
import { logoImage } from "@/app/constants";
import { useRouter } from "next/navigation";

export default function TopButtonAndLogo() {
  const router = useRouter();
  return (
    <nav className="w-[380px] pl-2 py-2 flex justify-between bg-white z-[1000]">
      <BackButton />
      <button onClick={() => router.push("/map")}>
        <Image
          src={logoImage}
          width={36}
          height={36}
          alt="cafekok logo"
          className="rounded-lg"
        />
      </button>
      <div className="w-[36px]" />
    </nav>
  );
}
