import KakaoMap from "@/components/KakaoMap";

import ResultList from "@/components/ResultList";
import MoveInput from "@/components/common/MoveInput";
import ReSearchButton from "@/components/SearchSection/ReSerachButton";

export default function SearchMapPage() {
  return (
    <main className="relative">
      <section>
        <KakaoMap>
          <div className="w-full absolute top-8 z-[999]">
            <div className="flex flex-col justify-center gap-2 px-4">
              <MoveInput />
              <ReSearchButton />
            </div>
          </div>
        </KakaoMap>
        <ResultList />
      </section>
    </main>
  );
}
