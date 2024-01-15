"use client";

import styled from "@emotion/styled";
import Slider, { Settings as SliderSettings } from "react-slick";
import LazyImage from "@/shared/components/LazyImage";
import ChevronLeft from "@/shared/icons/ChevronLeft";
import { useRef } from "react";

const ItemSlider = () => {
  const slideRef = useRef<Slider>(null);

  const nextSlide = () => {
    slideRef.current?.slickNext();
  };

  const prevSlide = () => {
    slideRef.current?.slickPrev();
  };

  return (
    <Wrapper>
      <Slider {...settings} ref={slideRef}>
        {list.map((item, idx) => (
          <Item {...item} key={idx} />
        ))}
      </Slider>

      <div
        className="absolute left-3 top-1/3 text-gray-800 p-0 bg-gray-200 w-10 h-10 rounded-full  flex items-center justify-center"
        onClick={prevSlide}
      >
        <ChevronLeft />
      </div>

      <div
        className="absolute right-3 !rotate-180 top-1/3 text-gray-800 p-0 bg-gray-200 w-10 h-10 rounded-full grid place-items-center"
        onClick={nextSlide}
      >
        <ChevronLeft />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-height: 509.6px;

  @media screen and (max-width: 1024px) {
    min-height: 537.6px;
  }

  @media screen and (max-width: 600px) {
    min-height: 383.8px;
  }

  .slick-slider {
    overflow: hidden;
  }

  .slick-list {
    margin: 0 -15px;
  }

  .slick-slide > div {
    padding: 0 15px;
  }
`;

type Props = { title: string; text: string; image: string };

const Item = ({ title, text, image }: Props) => {
  return (
    <div className="">
      <LazyImage style={{ height: "clamp(160px, 45vw, 300px)" }} src={image} />
      <h3 className="text-2xl sm:text-xl !font-title !font-bold my-4">{title}</h3>
      <p className="text-xl sm:text-base font-text text-black">{text}</p>
    </div>
  );
};

export default ItemSlider;

const list: Props[] = [
  {
    image: "https://ik.imagekit.io/cocroooiz/frontend/Demcawheel%20chair.jpg?updatedAt=1702486683351",
    title: "Wheel chairs for Akwa Ibom state with DEMECA",
    text: "Partnering with DEMECA, we have been able to donate over 500 wheelchairs to support the physically challenged in Akwa Ibom, a State in the South-South region of Nigeria.",
  },
  {
    image: "https://ik.imagekit.io/cocroooiz/frontend/Donation%20of%20school%20block%20at%20the%20home%20page.JPG?updatedAt=1702486773435",
    title: "Donation of school blocks to partner schools in Nigeria",
    text: "Thanks for your support. We were able to provide St. Paul Secondary School and the Monika Kindergarten and Elementary School new classroom blocks and other learning facilities.",
  },
  {
    image: "https://ik.imagekit.io/cocroooiz/frontend/Usaka%20Evening%20Project.jpg?updatedAt=1702486793393",
    title: "The Usaka Evening School project",
    text: "With your support we have taken education to children in Usaka, a poor community in the South-South Region of Nigeria where children have little or no access to adequate schools, good roads and clean water.",
  },
  {
    image: "https://ik.imagekit.io/cocroooiz/frontend/donation-result-completed-library-2.png?updatedAt=1701231368410",
    title: "Completed library for primary and secondary students",
    text: "With your support we have built a library for school children in a poor community in the South-South Region of Nigeria where children have little or no access to adequate books and learning tools",
  },
];

const settings: SliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2.4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  swipe: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2.1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
