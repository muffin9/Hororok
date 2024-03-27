import DetailInfo from "@/components/DetailInfo";

type CafeListProps = {
  params: {
    id: string;
  };
};

// server api call

export default async function CafeListPage({ params }: CafeListProps) {
  return (
    <main>
      <DetailInfo />
    </main>
  );
}
