import Hero from "./components/Hero";
import OurHistory from "./components/OurHistory";

const Page = () => {
  return (
    <main className="flex flex-col gap-20 md:gap-16">
      <Hero />
      <OurHistory />
    </main>
  );
};

export default Page;
