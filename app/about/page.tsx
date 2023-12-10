import ExecutiveTeam from "./components/ExecutiveTeam";
import Hero from "./components/Hero";
import MembersVolunteers from "./components/MembersVolunteers";
import OurGoals from "./components/OurGoals";
import OurHistory from "./components/OurHistory";
import TheBoard from "./components/TheBoard";

const Page = () => {
  return (
    <main className="flex flex-col gap-20 md:gap-16">
      <Hero />
      <OurHistory />
      <OurGoals />
      <TheBoard />
      <ExecutiveTeam />
      <MembersVolunteers />
    </main>
  );
};

export default Page;
