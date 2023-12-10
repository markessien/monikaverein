import Heading42 from "@/shared/components/Heading42";
import PageLayer from "@/shared/components/PageLayer";
import LazyImage from "@/shared/components/LazyImage";

const Partners = () => {
  return (
    <PageLayer>
      <Heading42 className="mb-10">Our Partnerships: who we work with</Heading42>

      <div className="grid grid-cols-2 gap-10 lg:grid-cols-1 justify-items-center">
        <div className="max-w-[816px]">
          <h3 className="font-title font-bold text-2xl sm:text-xl mb-4">Who we work with</h3>

          <p className="text-xl font-text font-normal sm:text-base">
            In order to improve people's living conditions, the level of education must be improved. This starts at a
            young age. Hence the decision to found a kindergarten. In 1981 this bungalow is rented. It can accommodate 4
            group rooms. In the beginning, 2 educators will be hired and trained. In the first quarter, 20 children
            register. In the second quarter there are already more than 40 children and 5 employees. The number of
            children is constantly growing. New teachers and other employees are hired. There is a lot to do – in
            kindergarten and in the family
          </p>
        </div>

        <LazyImage
          className="max-w-[622px] w-full ml-auto lg:ml-0"
          src="https://ik.imagekit.io/cocroooiz/frontend/partner-handshake.png?updatedAt=1702240027536"
        />
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn btn-outline">Learn More</button>
      </div>
    </PageLayer>
  );
};

export default Partners;
