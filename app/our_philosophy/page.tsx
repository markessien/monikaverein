import WorkTogether from "@/shared/components/WorkTogether";
import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import Hero from "./components/Hero";
import IntroText from "./components/IntroText";
import OurMission from "./components/OurMission";
import OurVision from "./components/OurVision";
import WorkInAfrica from "@/shared/components/WorkInAfrica";
import CoreValues from "./components/CoreValues";

const Page = () => {
  return (
    <main className="flex flex-col gap-20 md:gap-8">
      <Hero />
      <IntroText />
      <OurMission />
      <OurVision />
      <WorkInAfrica />
      <CoreValues />
      <WorkTogether />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
