import KakaoMap from "@/components/KakaoMap";

import { Suspense } from "react";
import ResultList from "@/components/ResultList";
import MoveInput from "@/components/common/MoveInput";

export default function SearchMapPage() {
  return (
    <main className="relative">
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <KakaoMap>
            <div className="w-full absolute top-8 z-[999]">
              <div className="flex flex-col justify-center gap-6 px-4">
                <MoveInput />
                <button className="text-primary-300">이 지역에서 재검색</button>
              </div>
              <ResultList />
            </div>
          </KakaoMap>
        </Suspense>
      </section>
    </main>
  );
}
