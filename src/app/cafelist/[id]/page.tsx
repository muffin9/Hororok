import DetailInfo from "@/components/DetailInfo";

type CafeListProps = {
  params: {
    id: string;
  };
};

export default async function CafeListPage({ params }: CafeListProps) {
  return (
    <main>
      <DetailInfo cafeId={params.id} />
    </main>
  );
}
