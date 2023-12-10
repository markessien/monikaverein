import LazyImage from "@/shared/components/LazyImage";
import PageLayer from "@/shared/components/PageLayer";

const Hero = () => {
  return (
    <PageLayer
      className="!p-0 relative flex justify-center items-center"
      style={{ height: "clamp(260px, 50vw, 768px)" }}
    >
      <LazyImage
        className="w-full h-full"
        src="https://ik.imagekit.io/cocroooiz/frontend/monika-school.png?updatedAt=1702013525265"
        blur="https://ik.imagekit.io/cocroooiz/frontend/tr:w-50,h-50/monika-school.png?updatedAt=1702013525265"
      />

      <div className="absolute left-20 text-white md:left-5 grid gap-4 text-6xl xl:text-4xl sm:!text-lg font-title font-bold">
        <div className="text-black bg-white rounded p-6 md:p-2 w-fit sm:!p-1">About us at Monika</div>
        <div className="text-primary-600 bg-white rounded p-6 md:p-2 w-fit ml-32 md:ml-5 sm:!p-1">
          Kindergarten Förderverein.
        </div>
      </div>
    </PageLayer>
  );
};

export default Hero;