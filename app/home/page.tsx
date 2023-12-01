import WorkTogether from "@/shared/components/WorkTogether";
import Hero from "./components/Hero";
import MakeDonation from "./components/MakeDonation";
import Philosophy from "./components/Philosophy";
import SupportProject from "./components/SupportProject";
import WorkInAfrica from "@/shared/components/WorkInAfrica";
import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";

const Page = () => {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <SupportProject />
      <MakeDonation />
      <Philosophy />
      <WorkTogether />
      <WorkInAfrica />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
