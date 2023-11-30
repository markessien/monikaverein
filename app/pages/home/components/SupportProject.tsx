import Heading42 from "@/shared/components/Heading42";
import PageLayer from "@/shared/components/PageLayer";

const SupportProject = () => {
  return (
    <PageLayer className="flex flex-col gap-3 relative -mt-20" tag="section">
      <DollarLabel />

      <Heading42 className="heading-42 mt-5">Support our Back to School Project</Heading42>

      <p className="text-center text-xl font-text max-w-[962px] mx-auto">
        With just $20, you can help get 1,000 children off the streets and back to school by paying their tuition and
        providing skills training for them.
      </p>

      <button className="btn btn-error mx-auto mt-3">Donate Now</button>
    </PageLayer>
  );
};

const DollarLabel = () => (
  <div className="rounded bg-white p-4 absolute left-[45%] -top-20 lg:left-1/2 lg:-translate-x-1/2 sm:hidden">
    <span className="text-sec text-4xl font-bold border border-solid border-secondary-300 bg-neutral-100 p-2 w-40 inline-block text-center rounded font-text">
      $20
    </span>
  </div>
);

export default SupportProject;
