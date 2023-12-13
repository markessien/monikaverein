import LazyImage from "@/shared/components/LazyImage";

const Slider = () => {
  const list: Props[] = [
    {
      image: "https://ik.imagekit.io/cocroooiz/frontend/Demcawheel%20chair.jpg?updatedAt=1702486683351",
      title: "Wheel chairs for Akwa Ibom state with DEMECA",
      text: "Partnering with DEMECA, we have been able to donate over 500 wheelchairs to support the physically challenged in Akwa Ibom, a State in the South-South region of Nigeria.",
    },
    {
      image:
        "https://ik.imagekit.io/cocroooiz/frontend/Donation%20of%20school%20block%20at%20the%20home%20page.JPG?updatedAt=1702486773435",
      title: "Donation of school blocks to partner schools in Nigeria",
      text: "Thanks for your support. We were able to provide St. Paul Secondary School and the Monika Kindergarten and Elementary School new classroom blocks and other learning facilities.",
    },
    {
      image: "https://ik.imagekit.io/cocroooiz/frontend/Usaka%20Evening%20Project.jpg?updatedAt=1702486793393",
      title: "The Usaka Evening School project",
      text: "With your support we have taken education to children in Usaka, a poor community in the South-South Region of Nigeria where children have little or no access to adequate schools, good roads and clean water.",
    },
    {
      image:
        "https://ik.imagekit.io/cocroooiz/frontend/donation-result-completed-library-2.png?updatedAt=1701231368410",
      title: "Completed library for primary and secondary students",
      text: "With your support we have built a library for school children in a poor community in the South-South Region of Nigeria where children have little or no access to adequate books and learning tools",
    },
  ];

  return (
    <div className="carousel carousel-center space-x-10">
      {list.map((item, idx) => (
        <div className="carousel-item" key={item.title + idx}>
          <Item {...item} />
        </div>
      ))}
    </div>
  );
};

type Props = { title: string; text: string; image: string };

const Item = ({ title, text, image }: Props) => {
  return (
    <div className="w-[424px] sm:w-full sm:max-w-[280px] ">
      <LazyImage style={{ height: "clamp(160px, 45vw, 300px)" }} src={image} />
      <h3 className="text-2xl sm:text-xl !font-title !font-bold my-4">{title}</h3>
      <p className="text-xl sm:text-base font-text text-black">{text}</p>
    </div>
  );
};

export default Slider;
