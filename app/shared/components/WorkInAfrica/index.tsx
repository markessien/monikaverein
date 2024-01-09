import Link from "next/link";
import LazyImage from "../LazyImage";
import PageLayer from "../PageLayer";
import AfricaSvg from "./images/AfricaSvg";
import { AppRoutes } from "@/shared/utilities/routes";
import Text from "../Text";

const WorkInAfrica = () => {
  return (
    <PageLayer className="bg-secondary-600 h-[648px] md:h-auto overflow-hidden flex gap-8 justify-around items-center md:flex-col relative z-[1] py-10 px-24">
      <AfricaSvg className="absolute left-28 -z-[1]" />

      <div className="flex flex-col gap-6">
        <Text size="60" tag="h2" className="text-neutral-100">
          Come work in Africa
        </Text>

        <Text size="30" tag="p" className="xl:max-w-md text-secondary-100 text-pretty">
          There are various jobs to be undertaken that can help our cause
        </Text>

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
