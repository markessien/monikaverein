import LazyImage from "@/shared/components/LazyImage";
import Instagram from "@/about/shared/icons/Instagram";
import Twitter from "@/about/shared/icons/Twitter";
import Linkedin from "@/about/shared/icons/Linkedin";
import Social from "@/about/shared/components/Social";

export type ItemProps = {
  pic: string;
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  twitter: string;
  instagram: string;
};

const Item = ({ pic, name, role, bio, linkedin, twitter, instagram }: ItemProps) => {
  const root = "https://ik.imagekit.io/cocroooiz/frontend/";
  const blurRoot = root + "tr:w-50,h-50/";

  return (
    <div className="rounded bg-neutral-01 p-10 sm:p-4" style={{ maxWidth: "769px" }}>
      <LazyImage
        className="rounded-xl overflow-hidden"
        style={{ height: "clamp(260px, 50vw, 420px)", maxWidth: "694px" }}
        src={root + "tr:w-694,h-420/" + pic}
        blur={blurRoot + pic}
      />

      <p className="text-3xl font-title font-bold mt-4 sm:text-2xl">{name}</p>

      <div className="flex justify-between flex-wrap gap-2">
        <p className="text-2xl font-title font-normal" style={{ fontWeight: "200" }}>
          {role}
        </p>

        <div className="flex gap-2 items-center">
          <Social icon={<Instagram />} link={instagram} />
          <Social icon={<Twitter />} link={twitter} />
          <Social icon={<Linkedin />} link={linkedin} />
        </div>
      </div>

      <div className="h-[1px] bg-[#B6B6B6] my-4"></div>

      <p className="text-xl font-text font-normal text-black sm:text-base">{bio}</p>
    </div>
  );
};

export default Item;
