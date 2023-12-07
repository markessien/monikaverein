import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import DonationImpact from "./components/DonationImpact";

const Page = () => {
  return (
    <main className="flex flex-col gap-20 md:gap-8">
      <Hero />
      <Intro />
      <DonationImpact />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
