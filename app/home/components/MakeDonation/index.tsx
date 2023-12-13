import Heading42 from "@/shared/components/Heading42";
import PageLayer from "@/shared/components/PageLayer";
import Slider from "./Slider";

const MakeDonation = () => {
  return (
    <PageLayer className="flex flex-col gap-3" tag="section">
      <Heading42 className="heading-42 mt-5">Your donation makes a difference</Heading42>

      <p className="text-xl sm:text-base font-text text-center mb-9">
        Your priceless support plays an important and crucial role in our unrelenting pursuit of making a real
        difference.
      </p>

      <Slider />

      <button className="btn btn-outline w-fit mx-auto mt-5">Learn More</button>
    </PageLayer>
  );
};

export default MakeDonation;
