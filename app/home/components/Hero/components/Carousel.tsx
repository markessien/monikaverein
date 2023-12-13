"use client";

import LazyImage from "@/shared/components/LazyImage";
import { useCarouselPos } from "../data";
import { useEffect, useRef } from "react";

const Carousel = ({ images, id }: { images: string[]; id: string }) => {
  const Min = 0;
  const Max = images.length - 1;

  const ref = useRef<HTMLDivElement>(null);
  const edgeRef = useRef({ start: Min, end: Max });

  const { current, forward } = useCarouselPos()[0];

  const adjustFromStart = () => {
    edgeRef.current.start--;
    edgeRef.current.end--;

    if (edgeRef.current.end < Min) edgeRef.current.end = Max;
    if (edgeRef.current.start < Min) edgeRef.current.start = Max;
  };

  const adjustFromEnd = () => {
    edgeRef.current.start++;
    edgeRef.current.end++;

    if (edgeRef.current.end > Max) edgeRef.current.end = Min;
    if (edgeRef.current.start > Max) edgeRef.current.start = Min;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const list = Array.from(el.children) as HTMLDivElement[];

    if (forward && current === edgeRef.current.end) {
      el.removeChild(list[0]);
      el.appendChild(list[0]);

      adjustFromEnd();
    } else if (!forward && current === edgeRef.current.start) {
      const child = list[list.length - 1];

      el.removeChild(child);
      el.prepend(child);

      adjustFromStart();
    }
  }, [current, forward]);

  return (
    <div className="carousel absolute h-full w-full -z-[1]" ref={ref}>
      {images.map((img, idx) => (
        <SliderItem key={idx} idx={idx} image={img} id={id} />
      ))}
    </div>
  );
};

type SliderItemProps = { idx: number; image: string; id: string };

const SliderItem = ({ image, idx, id }: SliderItemProps) => {
  const root = "https://ik.imagekit.io/cocroooiz/frontend/";
  const blurRoot = root + "tr:w-50,h-50/";

  return (
    <LazyImage
      id={id + idx}
      className="carousel-item absolute w-full h-full [&>img]:brightness-90"
      src={root + image}
      blur={blurRoot + image}
    />
  );
};

export default Carousel;
