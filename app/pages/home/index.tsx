import WorkTogether from "@/shared/components/WorkTogether";
import Hero from "./components/Hero";
import MakeDonation from "./components/MakeDonation";
import Philosophy from "./components/Philosophy";
import SupportProject from "./components/SupportProject";
import WorkInAfrica from "@/shared/components/WorkInAfrica";

const Home = () => {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <SupportProject />
      <MakeDonation />
      <Philosophy />
      <WorkTogether />
      <WorkInAfrica />
    </main>
  );
};

export default Home;
