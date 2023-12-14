import Controllers from "./components/Controllers";
import Carousel from "./components/Carousel";
import { HangerText1 } from "./components/HangerTexts";

const images = [
  { image: "multi-purpose-assembly-hall.jpeg?updatedAt=1701677666141", hangerText: <HangerText1 /> },
  { image: "donate-hero.jpg?updatedAt=1701835679456", hangerText: <></> },
  { image: "monika-school.png?updatedAt=1702013525265", hangerText: <></> },
  { image: "hero-1.png?updatedAt=1701210478670", hangerText: <></> },
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
