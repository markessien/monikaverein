import ArrowRight from "@/shared/icons/ArrowRight";
import PageLayer from "../PageLayer";

const Waitlist = () => {
  return (
    <PageLayer className="flex flex-col justify-center items-center gap-6 h-[331px] bg-neutral-200">
      <h2 className="text-2xl sm:text-lg !font-bold !font-title text-secondary-400 text-center max-w-[930px] mb-6">
        Join our community to stay connected. Be among the first to hear about our projects and work.
      </h2>

      <input
        placeholder="Your Email Address"
        className="h-[30px] w-[220px] border-b border-solid border-gray-2 text-gray-3 rounded text-center bg-transparent focus:outline-none"
      />

      <button className="btn btn-outline">
        Subscribe Now <ArrowRight />{" "}
      </button>
    </PageLayer>
  );
};

export default Waitlist;
