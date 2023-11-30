import LazyImage from "../LazyImage";
import PageLayer from "../PageLayer";
import AfricaSvg from "./images/AfricaSvg";

const WorkInAfrica = () => {
  return (
    <PageLayer className="bg-sec h-[648px] flex justify-around items-center relative z-[1] py-10 px-24">
      <AfricaSvg className="absolute left-28 -z-[1]" />

      <div className="flex flex-col gap-6 justify-center">
        <h2 className="font-bold text-6xl font-title text-neutral-100">Come work in Africa</h2>

        <p className="font-title font-bold text-3xl text-secondary-100">
          There are various jobs to be undertaken that can help our cause
        </p>

        <button className="btn btn-error w-fit">Job Offers</button>
      </div>

      <LazyImage
        className="absolute w-[538px] h-[538px]"
        src="https://ik.imagekit.io/cocroooiz/frontend/hand-shake.png?updatedAt=1701315798675"
      />
    </PageLayer>
  );
};

export default WorkInAfrica;
