import PageLayer from "@/shared/components/PageLayer";
import LazyImage from "@/shared/components/LazyImage";

const FundRaise = () => {
  const root = "https://ik.imagekit.io/cocroooiz/get_involved/";
  const img = "fund-raise-for-us.jpg?updatedAt=1704827076478";

  return (
    <PageLayer className="w-full h-[648px] bg-secondary-100 flex justify-around items-center md:flex-col md:h-auto md:py-8 gap-8">
      <div>
        <h2 className="text-6xl xl:text-5xl sm:!text-2xl font-bold font-title text-secondary-1000">Fundraise for us</h2>
        <p className="text-3xl xl:text-xl text-secondary-800 max-w-[819px] xl:max-w-[519px] mt-8 sm:mt-4 mb-4 font-title font-bold sm:!text-base">
          {`Join forces with us through your corporate donation and together, let's enhance the lives of children`}
        </p>
        <button className="btn btn-primary">Get Involved</button>
      </div>

      <LazyImage
        style={{ width: "clamp(280px, 40vw, 538px)", height: "clamp(280px, 40vw, 538px)" }}
        className="rounded-full overflow-hidden"
        src={root + "tr:w-538,h-538/" + img}
        blur={root + "tr:w-50,h-50/" + img}
      />
    </PageLayer>
  );
};

export default FundRaise;
