import DetailInfo from "@/components/DetailInfo";

type CafeProps = {
  params: {
    id: string;
  };
};

export default async function CafePage({ params }: CafeProps) {
  return (
    <main>
      <DetailInfo cafeId={params.id} />
    </main>
  );
}
