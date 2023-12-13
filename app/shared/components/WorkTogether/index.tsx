import { ReactNode } from "react";
import Heading42 from "../Heading42";
import PageLayer from "../PageLayer";
import FundRaising from "./images/FundRaising";
import Volunteering from "./images/Volunteering";
import Giving from "./images/Giving";
import LazyImage from "../LazyImage";

const WorkTogether = () => {
  return (
    <PageLayer className="flex flex-col gap-20 sm:gap-10">
      <Heading42>Ways we can work together</Heading42>

      <div className="flex gap-6 justify-around flex-wrap md:gap-16 sm:!gap-10">
        <Item
          image="https://ik.imagekit.io/cocroooiz/frontend/dollar-bag.png?updatedAt=1702480583695"
          title="Fundraising"
          link=""
        />
        <Item
          title="Volunteering"
          link=""
          image="https://ik.imagekit.io/cocroooiz/frontend/heart-bag.png?updatedAt=1702480583870"
        />
        <Item
          title="Giving"
          link=""
          image="https://ik.imagekit.io/cocroooiz/frontend/gift-bag.png?updatedAt=1702480583466"
        />
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
    <button className="btn btn-outline">Learn More</button>
  </div>
);

export default WorkTogether;
