import LazyImage from "@/shared/components/LazyImage";

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

      <p className="text-3xl font-title font-bold mt-4">{name}</p>

      <div className="flex justify-between">
        <p className="text-2xl font-title font-normal" style={{ fontWeight: "200" }}>
          {role}
        </p>
      </div>

      <div className="h-[1px] bg-[#B6B6B6] my-4"></div>

      <p className="text-xl font-text font-normal text-black sm:text-base">{bio}</p>
    </div>
  );
};

export default Item;
