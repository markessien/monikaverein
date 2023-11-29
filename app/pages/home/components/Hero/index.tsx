import LazyImage from "@/shared/components/LazyImage";
import ArrowLeft from "./icons/ArrowLeft";
import ArrowRight from "./icons/ArrowRight";

const Hero = () => {
  return (
    <section className="carousel w-full relative h-[768px] lg:h-[500px] sm:!h-[300px]">
      <LazyImage
        id="slide1"
        className="carousel-item relative w-full"
        src="https://ik.imagekit.io/cocroooiz/frontend/hero-1.png?updatedAt=1701210478670"
        blur="https://ik.imagekit.io/cocroooiz/frontend/tr:w-50,h-50/hero-1.png?updatedAt=1701210478670"
      />

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 text-gray-100 md:hidden">
        <a href="#slide4" className="btn btn-ghost h-fit p-0">
          <ArrowLeft />
        </a>
        <a href="#slide2" className="btn btn-ghost h-fit  p-0">
          <ArrowRight />
        </a>
      </div>

      <div className="absolute transform -translate-y-1/2 left-36 top-[55%] text-6xl text-black font-bold lg:text-3xl sm:hidden">
        <p className="p-7 bg-white w-fit rounded lg:p-4">Nigerian</p>
        <p className="p-7 bg-white w-fit rounded ml-10 mt-3 text-error lg:p-4">Children in Need</p>
      </div>
    </section>
  );
};

export default Hero;
