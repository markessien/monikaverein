import LazyImage from "../LazyImage";
import PageLayer from "../PageLayer";
import AfricaSvg from "./images/AfricaSvg";

const WorkInAfrica = () => {
  return (
    <PageLayer className="bg-sec h-[648px] md:h-auto overflow-hidden flex gap-8 justify-around items-center md:flex-col relative z-[1] py-10 px-24">
      <AfricaSvg className="absolute left-28 -z-[1]" />

      <div className="flex flex-col gap-6 justify-center">
        <h2 className="font-bold text-6xl font-title text-neutral-100 sm:text-4xl">Come work in Africa</h2>

        <p className="font-title font-bold text-3xl lg:text-2xl sm:text-xl xl:max-w-md text-secondary-100">
          There are various jobs to be undertaken that can help our cause
        </p>

        <button className="btn btn-error w-fit">Job Offers</button>
      </div>

      <LazyImage
        className="absolute md:relative w-[538px] h-[538px] xl:w-[400px] xl:h-[400px] sm:!w-[300px] sm:!h-[300px] rounded-full overflow-hidden"
        src="https://ik.imagekit.io/cocroooiz/frontend/hand-shake.png?updatedAt=1701315798675"
      />
    </PageLayer>
  );
};

export default WorkInAfrica;
