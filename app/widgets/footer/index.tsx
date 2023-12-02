import PageLayer from "@/shared/components/PageLayer";
import ListItem, { LinkProps } from "./ListItem";
import InitiativeBadge from "./InitiativeBadge";
import Medium from "@/shared/icons/Medium";
import Social from "./Social";
import Facebook from "@/shared/icons/Facebook";
import Twitter from "@/shared/icons/Twitter";
import LinkedIn from "@/shared/icons/LinkedIn";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <PageLayer
      tag="footer"
      className="flex flex-col justify-center items-center lg_up:!p-20 py-4 gap-4 h-[505px] xl:h-auto bg-secondary-400 mt-10"
    >
      <div className="flex justify-between flex-wrap gap-10 w-full max-w-[1500px]">
        <ListItem title="About us" links={Aboutus} />
        <ListItem title="Projects" links={Projects} />
        <ListItem title="Get Involved" links={GetInvolved} />
        <ListItem title="Locations" links={Locations} />
      </div>

      <div className="border-b border-solid border-secondary-100 w-full"></div>

      <div className="flex flex-wrap gap-4 w-full max-w-[1500px]">
        <InitiativeBadge />

        <Logo className="btn btn-ghost text-black-3 text-4xl font-inter font-black -mt-2 hover:bg-transparent" />

        <p className="font-text text-base font-normal text-neutral-100 mt-2">© Monika Kindergarten Förderverein e.V.</p>

        <div className="flex gap-6 ml-auto mr-40 xl:mr-0 md:ml-0">
          <Social icon={<Medium />} />
          <Social icon={<Facebook />} />
          <Social icon={<Twitter />} />
          <Social icon={<LinkedIn />} />
        </div>
      </div>
    </PageLayer>
  );
};

const Aboutus: LinkProps[] = [
  { type: "link", name: "Our history", href: "" },
  { type: "link", name: "Our goals", href: "" },
  { type: "link", name: "Our organization", href: "" },
  { type: "link", name: "Our partners", href: "" },
  { type: "link", name: "Transparency", href: "" },
];

const Projects: LinkProps[] = [
  { type: "link", name: "Library", href: "" },
  { type: "link", name: "Fee Funds", href: "" },
  { type: "link", name: "Computer Lab", href: "" },
  { type: "link", name: "Hostel Construction", href: "" },
];

const GetInvolved: LinkProps[] = [
  { type: "link", name: "Volunteer", href: "" },
  { type: "link", name: "Provide Home", href: "" },
  { type: "link", name: "Give Food", href: "" },
  { type: "link", name: "Gift Donations", href: "" },
  { type: "link", name: "Save the Children", href: "" },
];

const Locations: LinkProps[] = [
  { type: "location", country: "Germany", address: "Harmburg, XXXGFGG,", phone: "+1 7383-635-1574." },
  {
    type: "location",
    country: "Nigeria",
    address: "10b NEPA Line, Ikot Ekpene, Akwa Ibom State,",
    phone: "+234-706-3390-988.",
  },
];

export default Footer;
