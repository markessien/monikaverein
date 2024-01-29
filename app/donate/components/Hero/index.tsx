import LazyImage from "@/shared/components/LazyImage";
import PageLayer from "@/shared/components/PageLayer";
import ProgressBar from "./ProgressBar";

const Hero = () => {
  return (
    <PageLayer className="!p-0 relative flex justify-center items-center max-w-full w-full" style={{ height: "clamp(270px, 50vw, 768px)" }}>
      <LazyImage className="w-full h-full" src="/images/donate-hero.webp" />

      <div className="absolute left-20 text-white md:left-5 sm:hidden">
        <p className="text-xl text-neutral-100 bg-primary rounded px-4 font-text font-normal w-fit mb-3">URGENT</p>
        <p className="text-6xl md:text-3xl font-title font-bold text-primary-600 bg-white rounded p-6 md:p-2 w-fit">Special school block</p>
        <ProgressBar raised={15000} expected={150000} />
      </div>

      <DollarLabel />
    </PageLayer>
  );
};

const DollarLabel = () => (
  <div className="rounded-t bg-white-f8 p-4 absolute bottom-0 sm:hidden">
    <span className="text-secondary-600 text-4xl font-bold border border-solid border-secondary-300 bg-neutral-100 p-2 w-40 inline-block text-center rounded font-text">
      $20
    </span>
  </div>
);

export default Hero;
