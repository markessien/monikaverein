import Controllers from "./components/Controllers";
import Carousel from "./components/Carousel";

const images = [
  "multi-purpose-assembly-hall.jpeg?updatedAt=1701677666141",
  "donate-hero.jpg?updatedAt=1701835679456",
  "monika-school.png?updatedAt=1702013525265",
  "hero-1.png?updatedAt=1701210478670",
];

const id = "slide";

const Hero = () => {
  return (
    <section className="w-full relative z-[1]" style={{ height: "clamp(400px, 50vw,768px)" }}>
      <Controllers start={0} end={images.length - 1} id={id} />

      <div className="absolute transform -translate-y-1/2 left-36 top-[55%] text-6xl text-black font-bold lg:text-3xl sm:hidden">
        <p className="p-7 bg-white w-fit rounded lg:p-4">Nigerian</p>
        <p className="p-7 bg-white w-fit rounded ml-10 mt-3 text-error lg:p-4">Children in Need</p>
      </div>

      <Carousel images={images} id={id} />
    </section>
  );
};

export default Hero;
