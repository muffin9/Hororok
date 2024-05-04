import EditProfile from "@/components/MyPageSection/EditProfile";
import TopNavigation from "@/components/common/TopNavigation";

export default function MyPageEdit() {
  return (
    <section className="h-full bg-white">
      <TopNavigation title="" />
      <EditProfile />
    </section>
  );
}
