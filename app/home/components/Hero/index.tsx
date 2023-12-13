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

      <Carousel images={images} id={id} />
    </section>
  );
};

export default Hero;
