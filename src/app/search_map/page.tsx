"use client";

import KakaoMap from "@/components/KakaoMap";

import { Suspense } from "react";
import ResultList from "@/components/ResultList";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";

export default function SearchMapPage() {
  const router = useRouter();

  return (
    <main className="relative">
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <KakaoMap>
            <div className="w-full absolute top-8 z-[999]">
              <div className="px-4">
                <Input
                  type="text"
                  placeholder="어디 근처 카페 찾으세요?"
                  onClick={() => router.push("/search")}
                  className="w-full h-[50px] p-4 bg-white border-[1xps] border-gray-400 rounded-lg focus:outline-none"
                />
              </div>
              <ResultList />
            </div>
          </KakaoMap>
        </Suspense>
      </section>
    </main>
  );
}
