import DetailInfo from "@/components/DetailInfo";
import TopButtonAndLogo from "@/components/common/TopButtonAndLogo";

type CafeProps = {
  params: {
    id: string;
  };
};

export default async function CafePage({ params }: CafeProps) {
  return (
    <main>
      <TopButtonAndLogo />
      <DetailInfo cafeId={params.id} />
    </main>
  );
}
