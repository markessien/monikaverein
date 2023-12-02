import ContactInfo from "@/shared/components/ContactInfo";
import Intro from "./components/Intro";
import Waitlist from "@/shared/components/Waitlist";
import Accomplished from "./components/Accomplished";
import InProgress from "./components/InProgress";

export default function Page() {
  return (
    <main className="flex flex-col gap-20">
      <Intro />
      <Accomplished />
      <InProgress />
      <ContactInfo />
      <Waitlist />
    </main>
  );
}
