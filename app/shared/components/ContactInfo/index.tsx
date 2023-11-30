import Heading42 from "../Heading42";
import LazyImage from "../LazyImage";
import PageLayer from "../PageLayer";

const ContactInfo = () => {
  return (
    <PageLayer className="flex flex-col gap-10">
      <Heading42>For more information about our organization</Heading42>

      <div className="flex justify-between items-center flex-wrap gap-14 max-w-7xl mx-auto w-full">
        <Item
          image="https://ik.imagekit.io/cocroooiz/frontend/christiana-sow.png?updatedAt=1701315798667"
          name="Christiana Sow"
          country="Germany"
          phone="+1 7383-635-1574 "
          email="contactperson@xxyg.de"
        />
        <Item
          image="https://ik.imagekit.io/cocroooiz/frontend/etimbok-obot.png?updatedAt=1701315798231"
          name="Etimbuk Obot"
          country="Nigeria"
          phone="+234-706-3390-988"
          email="contactperson@xxyg.de"
        />
      </div>
    </PageLayer>
  );
};

const Item = ({
  image,
  name,
  country,
  phone,
  email,
}: {
  image: string;
  name: string;
  country: string;
  phone: string;
  email: string;
}) => (
  <div className="flex gap-8 sm:flex-col sm:mx-auto">
    <LazyImage src={image} className="rounded-full overflow-hidden w-[267px] h-[267px]" />

    <div className="flex flex-col justify-center gap-0 sm:items-center">
      <h2 className="text-3xl font-bold text-black font-title m-0 mb-4">{name}</h2>
      <h3 className="text-xl font-bold font-title m-0 text-black">{country}</h3>
      <p className="text-xl font-text font-normal m-0">Phone: {phone}</p>
      <p className="text-xl font-text font-normal m-0">{email}</p>
    </div>
  </div>
);

export default ContactInfo;
