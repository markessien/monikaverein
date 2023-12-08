import LazyImage from "@/shared/components/LazyImage";

export type ItemProps = { title: string; text: string; images: [string, string] };

const Item = ({ title, text, images }: ItemProps) => {
  const root = "https://ik.imagekit.io/cocroooiz/frontend/";
  return (
    <div>
      <h3 className="font-bold font-title mb-4 text-4xl sm:text-2xl text-center">{title}</h3>

      <p className="font-text text-xl font-normal text-black sm:text-base mb-4">{text}</p>

      <div className="flex gap-6 justify-between h-[393px]  lg:h-auto md:flex-wrap">
        {images.map((img, idx) => (
          <LazyImage
            key={img + idx}
            // className="w-full max-w-[776px]"
            style={{ height: "clamp(200px, 45vw, 385px)", width: "min(100%, 776px)" }}
            src={root + img}
            blur={root + "tr:w-50,h-50/" + img}
          />
        ))}
      </div>
    </div>
  );
};

export default Item;
