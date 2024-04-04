import ReviewCreate from "@/components/ReviewCreate";

export default function ReviewCreatePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section>
      <ReviewCreate cafeId={params.id} />
    </section>
  );
}
