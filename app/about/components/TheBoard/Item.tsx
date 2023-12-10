import LazyImage from "@/shared/components/LazyImage";
import ContactInfo, { ContactInfoProps } from "@/about/shared/components/ContactInfo";

export type ItemProps = ContactInfoProps & { pic: string; bio: string };

const Item = ({ pic, bio, ...contactInfo }: ItemProps) => {
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

      <ContactInfo {...contactInfo} />

      <div className="h-[1px] bg-[#B6B6B6] my-4"></div>

      <p className="text-xl font-text font-normal text-black sm:text-base">{bio}</p>
    </div>
  );
};

export default Item;