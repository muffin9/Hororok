import LoadingSpinner from "@/components/common/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LoadingSpinner size="xLarge" />
    </div>
  );
}
