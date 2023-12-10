import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import Intro from "./components/Intro";

const Page = () => {
  return (
    <main className="flex flex-col gap-20">
      <Intro />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
