import PageLayer from "../PageLayer";
import LazyImage from "../LazyImage";
import { AppRoutes } from "@/shared/utilities/routes";
import Link from "next/link";
import Text from "../Text";

const WorkTogether = () => {
  return (
    <PageLayer className="flex flex-col gap-20 sm:gap-10">
      <Text size="42" tag="h2">
        Ways we can work together
      </Text>

      <div className="flex gap-6 justify-around flex-wrap md:gap-16 sm:!gap-10">
        <Item
          image="https://ik.imagekit.io/cocroooiz/frontend/dollar-bag.png?updatedAt=1702480583695"
          title="Fundraising"
          link={AppRoutes.GetInvolved}
        />
        <Item
          title="Volunteering"
          link={AppRoutes.GetInvolved}
          image="https://ik.imagekit.io/cocroooiz/frontend/heart-bag.png?updatedAt=1702480583870"
        />
        <Item title="Giving" link={AppRoutes.Donate} image="https://ik.imagekit.io/cocroooiz/frontend/gift-bag.png?updatedAt=1702480583466" />
      </div>
    </PageLayer>
  );
};

const Item = ({ title, link, image }: { title: string; link: string; image?: string }) => (
  <div className="flex flex-col gap-5 items-center sm:gap-3">
    <LazyImage
      src={image}
      style={{ height: "clamp(160px, 45vw, 260px)", width: "clamp(160px, 45vw, 260px)" }}
      className="overflow-hidden rounded-full"
    />
    <p className="font-title font-bold text-3xl sm:text-base">{title}</p>
    <Link href={link} className="btn btn-outline">
      Learn More
    </Link>
  </div>
);

export default WorkTogether;
