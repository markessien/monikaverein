import Hero from "./components/Hero";
import MakeDonation from "./components/MakeDonation";
import SupportProject from "./components/SupportProject";

const Home = () => {
  return (
    <main className="pb-1">
      <Hero />
      <SupportProject />
      <MakeDonation />
    </main>
  );
};

export default Home;
