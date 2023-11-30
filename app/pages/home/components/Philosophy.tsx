import LazyImage from "@/shared/components/LazyImage";

const Philosophy = () => {
  return (
    <section className="relative h-[768px] max-h-[768px] lg:max-h-[350px] sm:!max-h-[300px]">
      <LazyImage
        className="h-full"
        src="https://ik.imagekit.io/cocroooiz/frontend/tr:w-1920,h-768/our-philosophy.jpeg?updatedAt=1701316112948"
        blur="https://ik.imagekit.io/cocroooiz/frontend/tr:w-60,h-50/our-philosophy.jpeg?updatedAt=1701316112948"
      />

      <div className="absolute top-[20%] sm:top-[10%] left-[10%] sm:left-6 max-w-[600px] grid gap-5">
        <h2 className="p-7 bg-white rounded lg:p-4 text-6xl text-error font-title font-bold lg:text-3xl w-fit">
          Our philosophy
        </h2>
        <p className=" text-white text-[42px] lg:text-4xl sm:!text-2xl">
          Together, we can help African children get quality Education.
        </p>
        <button className="btn btn-error text-white w-fit text-xl font-inter font-normal">Learn More</button>
      </div>
    </section>
  );
};

export default Philosophy;
