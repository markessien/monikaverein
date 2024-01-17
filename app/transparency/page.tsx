import ContactInfo from "@/shared/components/ContactInfo";
import Waitlist from "@/shared/components/Waitlist";
import Content from "./content";

const Page = () => {
  return (
    <main className="flex flex-col gap-20">
      <Content />
      <ContactInfo />
      <Waitlist />
    </main>
  );
};

export default Page;
