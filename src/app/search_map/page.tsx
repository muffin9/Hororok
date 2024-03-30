import KakaoMap from "@/components/KakaoMap";

import { Suspense } from "react";
import ResultList from "@/components/ResultList";
import MoveInput from "@/components/common/MoveInput";
import Loading from "../loading";
import ReSearchButton from "@/components/SearchSection/ReSerachButton";

export default function SearchMapPage() {
  return (
    <main className="relative">
      <section>
        <Suspense fallback={<Loading />}>
          <KakaoMap>
            <div className="w-full absolute top-8 z-[999]">
              <div className="flex flex-col justify-center gap-2 px-4">
                <MoveInput />
                <ReSearchButton />
              </div>
              <ResultList />
            </div>
          </KakaoMap>
        </Suspense>
      </section>
    </main>
  );
}
