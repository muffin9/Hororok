import EditProfile from "@/components/MyPageSection/EditProfile";
import MyNavigation from "@/components/MyPageSection/MyNavigation";

export default function MyPageEdit() {
  return (
    <section className="h-full bg-white">
      <MyNavigation title="" />
      <EditProfile />
    </section>
  );
}
