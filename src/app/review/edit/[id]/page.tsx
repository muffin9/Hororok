"use client";

import { getReviewInfo } from "@/apis/review";
import ReviewEdit from "@/components/ReviewEdit";
import { ReviewInfoType } from "@/interfaces/Review";
import { useEffect, useState } from "react";

export default function ReviewEditPage({ params }: { params: { id: string } }) {
  const [reviewData, setReviewData] = useState<ReviewInfoType>();

  useEffect(() => {
    async function fetchReviewData() {
      const data = await getReviewInfo(params.id);
      setReviewData(data);
    }

    fetchReviewData();
  }, [params.id]);

  return (
    reviewData && (
      <section>
        <ReviewEdit
          reviewId={params.id}
          reviewData={reviewData as ReviewInfoType}
        />
      </section>
    )
  );
}
