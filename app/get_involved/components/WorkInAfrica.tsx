import LazyImage from "@/shared/components/LazyImage";
import PageLayer from "@/shared/components/PageLayer";
import Text from "@/shared/components/Text";
import ArrowRight from "@/shared/icons/ArrowRight";

const WorkInAfrica = () => {
  const root = "https://ik.imagekit.io/cocroooiz/get_involved/";

  const images = ["work-in-africa-1.jpeg?updatedAt=1702359783838", "work-in-africa-2.png?updatedAt=1702359784462"];

  return (
    <PageLayer className="grid gap-8">
      <h2 className="text-3xl font-bold font-title text-center">Work in Africa</h2>
      <Text size="20">
        As a member of our organization, you will have the opportunity to make a tangible impact on the lives of African children, contribute to
        educational initiatives, and help shape a brighter future for the continent. Whether you are an educator, administrator, project manager, or
        have skills to offer in various fields, we welcome dedicated individuals who are passionate about making a difference.{" "}
      </Text>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-1 lg:place-items-center">
        {images.map((image, idx) => (
          <LazyImage
            key={image + idx}
            style={{ height: "clamp(260px, 45vw, 393px)", maxWidth: "750px" }}
            className={`rounded-2xl w-full`}
            src={root + "tr:w-750,h-393/" + image}
            blur={root + "tr:w-50,h-50/" + image}
          />
        ))}
      </div>

      <button className="btn btn-primary w-fit mx-auto">
        Available Jobs <ArrowRight />
      </button>
    </PageLayer>
  );
};

export default WorkInAfrica;
