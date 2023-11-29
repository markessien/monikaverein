import PageLayer from "@/shared/components/PageLayer";

const SupportProject = () => {
  return (
    <PageLayer className="flex flex-col gap-3 relative" tag="section">
      <DollarLabel />

      <h2 className="text-[42px] text-center font-title font-bold text-sec mt-5">Support our Back to School Project</h2>

      <p className="text-center text-xl font-text max-w-[962px] mx-auto">
        With just $20, you can help get 1,000 children off the streets and back to school by paying their tuition and
        providing skills training for them.
      </p>

      <button className="btn btn-error text-white mx-auto mt-3">Donate Now</button>
    </PageLayer>
  );
};

const DollarLabel = () => (
  <div className="rounded bg-white p-4 absolute left-[45%] -top-20">
    <span className="text-sec text-4xl font-bold border border-solid border-secondary-300 bg-neutral-100 p-2 w-40 inline-block text-center rounded font-text">
      $20
    </span>
  </div>
);

export default SupportProject;
