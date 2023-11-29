import LazyImage from "@/shared/components/LazyImage";

const Hero = () => {
  return (
    <section className="carousel w-full h-[768px] relative">
      <LazyImage
        id="slide1"
        className="carousel-item relative w-full"
        src="https://ik.imagekit.io/cocroooiz/frontend/hero-1.png?updatedAt=1701210478670"
        blur="https://ik.imagekit.io/cocroooiz/frontend/tr:w-50,h-50/hero-1.png?updatedAt=1701210478670"
      />

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>

      <div className="absolute transform -translate-y-1/2 left-28 top-[60%] text-6xl text-black font-bold">
        <p className="p-7 bg-white w-fit rounded">Nigerian</p>
        <p className="p-7 bg-white w-fit rounded ml-10 mt-3 text-error">Children in Need</p>
      </div>
    </section>
  );
};

export default Hero;
