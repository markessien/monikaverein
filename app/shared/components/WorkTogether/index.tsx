import { ReactNode } from "react";
import Heading42 from "../Heading42";
import PageLayer from "../PageLayer";
import FundRaising from "./images/FundRaising";
import Volunteering from "./images/Volunteering";
import Giving from "./images/Giving";

const WorkTogether = () => {
  return (
    <PageLayer className="flex flex-col gap-20">
      <Heading42>Ways we can work together</Heading42>

      <div className="flex gap-6 justify-around flex-wrap md:gap-16">
        <Item image={<FundRaising />} title="Fundraising" link="" />
        <Item image={<Volunteering />} title="Volunteering" link="" />
        <Item image={<Giving />} title="Giving" link="" />
      </div>
    </PageLayer>
  );
};

const Item = ({ image, title, link }: { image: ReactNode; title: string; link: string }) => (
  <div className="flex flex-col gap-5 items-center">
    {image}
    <p className="font-title font-bold text-3xl">{title}</p>
    <button className="btn btn-outline text-error font-inter text-xl font-normal">Learn More</button>
  </div>
);

export default WorkTogether;
