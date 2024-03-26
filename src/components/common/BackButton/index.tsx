"use client";

import { useRouter } from "next/navigation";

import Icon from "@/components/common/Icon";
import { useCallback } from "react";

const BackButton = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (router) {
      router.back();
    }
  }, [router]);

  return (
    <button type="button" onClick={handleClick} aria-label="back button">
      <Icon type="arrow_left" size="small" alt="뒤로 가기" />
    </button>
  );
};

export default BackButton;
