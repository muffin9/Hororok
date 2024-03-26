import Filter from "@/components/Filter";

import GNB from "@/components/common/GNB";
import Icon from "@/components/common/Icon";
import Input from "@/components/common/Input";
import Category from "@/components/common/Category";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HomeSection = () => {
  const router = useRouter();
  const [isFilter, setIsFilter] = useState(false);

  const categoryNames = [
    { id: 1, name: "목적" },
    { id: 2, name: "시설" },
    { id: 3, name: "분위기" },
    { id: 4, name: "메뉴" },
    { id: 5, name: "테마" },
  ];

  return (
    <section className="relative">
      <div className="px-4">
        <Input
          type="text"
          placeholder="어떤 카페가 궁금하세요?"
          onClick={() => router.push("/search")}
          className="w-full h-[50px] p-4 bg-white border-[1xps] border-gray-400 rounded-lg focus:outline-none"
        />
      </div>
      {isFilter ? (
        <Filter onCloseButton={() => setIsFilter(false)} />
      ) : (
        <>
          <div className="w-full flex justify-between mt-4 px-4">
            {categoryNames.map((tag) => {
              return (
                <Category
                  key={tag.id}
                  name={tag.name}
                  icon={<Icon type="arrow_under" size="xSmall" alt="더보기" />}
                  posIcon="right"
                  onClick={() => setIsFilter(true)}
                />
              );
            })}
          </div>
          <GNB />
        </>
      )}
    </section>
  );
};

export default HomeSection;
