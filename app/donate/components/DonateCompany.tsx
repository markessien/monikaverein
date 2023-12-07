import PageLayer from "@/shared/components/PageLayer";
import LazyImage from "@/shared/components/LazyImage";

const DonateCompany = () => {
  return (
    <PageLayer className="w-full h-[648px] bg-secondary-100 flex justify-around items-center md:flex-col md:h-auto md:py-8 gap-8">
      <div>
        <h2 className="text-6xl xl:text-5xl sm:!text-3xl font-bold font-title text-secondary-1000">
          Donate as a company
        </h2>
        <p className="text-3xl xl:text-xl text-secondary-800 max-w-[819px] xl:max-w-[519px] mt-8 mb-4 font-title font-bold">
          {`Join forces with us through your corporate donation, and together let's enhance the lives of children`}
        </p>
        <button className="btn btn-primary">Donate Now</button>
      </div>

      <LazyImage
        style={{ width: "clamp(280px, 40vw, 538px)", height: "clamp(280px, 40vw, 538px)" }}
        className="rounded-full overflow-hidden"
        src="https://ik.imagekit.io/cocroooiz/frontend/donate-company.jpg?updatedAt=1701977303190"
        blur="https://ik.imagekit.io/cocroooiz/frontend/tr:w-50,h-50/donate-company.jpg?updatedAt=1701977303190"
      />
    </PageLayer>
  );
};

export default DonateCompany;
