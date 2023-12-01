import LazyImage from "@/shared/components/LazyImage";

const Slider = () => {
  const list: Props[] = [
    {
      image: "https://ik.imagekit.io/cocroooiz/frontend/donation-result-wheel-chairs.png?updatedAt=1701230760071",
      title: "Wheel chairs for Akwa Ibom state with DEMECA",
      text: "Partnering with DEMECA, we have been able to donate over 500 wheelchairs to support the physically challenged in Akwa Ibom, a State in the South-South region of Nigeria.",
    },
    {
      image: "https://ik.imagekit.io/cocroooiz/frontend/donation-result-school-blocks.png?updatedAt=1701230732908",
      title: "Donation of school blocks to partner schools in Nigeria",
      text: "Thanks for your support. We were able to provide St. Paul Secondary School and the Monika Kindergarten and Elementary School new classroom blocks and other learning facilities.",
    },
    {
      image: "https://ik.imagekit.io/cocroooiz/frontend/donation-result-evening-school.png?updatedAt=1701230760275",
      title: "The Usaka Evening School Project",
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
    <div className="carousel carousel-center p-4 space-x-4">
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
      <LazyImage className="h-[327px] sm:h-[260px]" src={image} />
      <h3 className="text-[26px] sm:text-xl font-title font-bold my-4 text-gray-1">{title}</h3>
      <p className="text-xl sm:text-base font-text text-black">{text}</p>
    </div>
  );
};

export default Slider;
