"use client";

import LazyImage from "@/shared/components/LazyImage";
import { useCarouselPos } from "../data";
import { ReactNode, useEffect, useRef } from "react";

const Carousel = ({ images, id }: { images: { image: string; hangerText: ReactNode }[]; id: string }) => {
  // const Min = 0;
  // const Max = images.length - 1;

  const ref = useRef<HTMLDivElement>(null);
  // const edgeRef = useRef({ start: Min, end: Max });

  const { current, forward } = useCarouselPos()[0];

  // const adjustFromStart = () => {
  //   edgeRef.current.start--;
  //   edgeRef.current.end--;

  //   if (edgeRef.current.end < Min) edgeRef.current.end = Max;
  //   if (edgeRef.current.start < Min) edgeRef.current.start = Max;
  // };

  // const adjustFromEnd = () => {
  //   edgeRef.current.start++;
  //   edgeRef.current.end++;

  //   if (edgeRef.current.end > Max) edgeRef.current.end = Min;
  //   if (edgeRef.current.start > Max) edgeRef.current.start = Min;
  // };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const list = Array.from(el.children) as HTMLDivElement[];

    let id: any = null;

    if (forward) {
      const child = list[0];

      el.removeChild(child);
      child.classList.remove("animate-fade");
      child.classList.add("animate-fade");
      el.appendChild(child);
    } else {
      const lastChild = list[list.length - 1];
      const secondLastChild = list[list.length - 2];

      el.removeChild(secondLastChild);
      secondLastChild.classList.remove("animate-fade");
      secondLastChild.classList.add("animate-fade");
      el.append(secondLastChild);

      id = setTimeout(() => {
        el.removeChild(lastChild);
        el.prepend(lastChild);
      }, 600);
    }

    return () => {
      if (id) clearTimeout(id);
    };

    // eslint-disable-next-line
  }, [current, forward]);

  return (
    <div className="overflow-hidden absolute h-full w-full -z-[1]" ref={ref}>
      {images.map((img, idx) => (
        <div className="absolute w-full h-full" id={String(idx)} key={idx}>
          <SliderItem key={idx} idx={idx} image={img.image} />
          {img.hangerText}
        </div>
      ))}
    </div>
  );
};

type SliderItemProps = { idx: number; image: string; id?: string };

const SliderItem = ({ image, idx, id }: SliderItemProps) => {
  const root = "https://ik.imagekit.io/cocroooiz/frontend/";
  const blurRoot = root + "tr:w-50,h-50/";

  return (
    <LazyImage className="absolute w-full h-full [&>img]:brightness-90" src={root + image} blur={blurRoot + image} />
  );
};

export default Carousel;
