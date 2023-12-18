import Link from "next/link";
import LazyImage from "../LazyImage";
import PageLayer from "../PageLayer";
import AfricaSvg from "./images/AfricaSvg";
import { AppRoutes } from "@/shared/utilities/routes";

const WorkInAfrica = () => {
  return (
    <PageLayer className="bg-secondary-600 h-[648px] md:h-auto overflow-hidden flex gap-8 justify-around items-center md:flex-col relative z-[1] py-10 px-24">
      <AfricaSvg className="absolute left-28 -z-[1]" />

      <div className="flex flex-col gap-6 justify-center">
        <h2 className="font-bold text-6xl font-title text-neutral-100 xl:text-4xl sm:!text-3xl">Come work in Africa</h2>

        <p className="font-title font-bold text-3xl lg:text-2xl sm:!text-base xl:max-w-md text-secondary-100">
          There are various jobs to be undertaken that can help our cause
        </p>

        <Link href={AppRoutes.GetInvolved} className="btn btn-error w-fit">
          Job Offers
        </Link>
      </div>

      <LazyImage
        className="rounded-full overflow-hidden"
        style={{ height: "clamp(260px, 47vw, 538px)", width: "clamp(260px, 50vw, 538px)" }}
        src="https://ik.imagekit.io/cocroooiz/frontend/Copy%20of%20Come%20and%20Work%20with%20us.jpg?updatedAt=1702486684882"
      />
    </PageLayer>
  );
};

export default WorkInAfrica;
