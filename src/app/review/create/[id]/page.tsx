"use client";

import ReviewCreate from "@/components/ReviewCreate";
import { useSearchParams } from "next/navigation";

export default function ReviewCreatePage({
  params,
}: {
  params: { id: string };
}) {
  const cafeName = useSearchParams().get("cafeName");
  return (
    <section>
      <ReviewCreate cafeId={params.id} cafeName={cafeName} />
    </section>
  );
}
