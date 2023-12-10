import Hero from "./components/Hero";
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
    </main>
  );
};

export default Page;
