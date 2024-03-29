import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src={"/assets/Images/loading.png"}
        width={100}
        height={100}
        alt="Loading..."
      />
    </div>
  );
}
