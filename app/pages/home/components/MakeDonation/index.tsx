import PageLayer from "@/shared/components/PageLayer";

const MakeDonation = () => {
  return (
    <PageLayer className="flex flex-col gap-3 mt-12" tag="section">
      <h2 className="text-[42px] text-center font-title font-bold text-sec mt-5">Your donation makes a difference</h2>

      <p className="text-center text-xl font-text max-w-[962px] mx-auto">
        Your priceless support plays an important and crucial role in our unrelenting pursuit of making a real
        difference.
      </p>
    </PageLayer>
  );
};

export default MakeDonation;
