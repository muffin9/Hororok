import { getCafePhotoInfo } from "@/apis/cafe";
import { useQuery } from "@tanstack/react-query";

const useGetPhotoInfo = (cafeId: string, cursor: number, page: string) => {
  const { data: photoInfo } = useQuery({
    queryKey: ["getPhotoInfo", cafeId],
    queryFn: () => getCafePhotoInfo(cafeId, cursor, page),
  });

  return { photoInfo };
};

export default useGetPhotoInfo;
