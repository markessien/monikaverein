import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import Hero from "./components/Hero";

const Page = () => {
  return (
    <main className="flex flex-col gap-20 md:gap-8">
      <Hero />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
