"use client";

import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import { useCarouselPos } from "../data";

const Controllers = ({ start, end, id }: { start: number; end: number; id: string }) => {
  const [posData, setPosData] = useCarouselPos();
  const { current } = posData;

  const prev = current <= start ? end : current - 1;
  const next = current >= end ? start : current + 1;

  const prevSlide = `#${id}${prev}`;
  const nextSlide = `#${id}${next}`;

  return (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 text-gray-100 md:hidden">
      <a href={prevSlide} className="btn btn-ghost h-fit p-0" onClick={() => setPosData(prev, false)}>
        <ArrowLeft />
      </a>
      <a href={nextSlide} className="btn btn-ghost h-fit  p-0" onClick={() => setPosData(next, true)}>
        <ArrowRight />
      </a>
    </div>
  );
};

export default Controllers;
