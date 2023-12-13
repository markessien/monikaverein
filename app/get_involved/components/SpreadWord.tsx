import Heading42 from "@/shared/components/Heading42";
import LazyImage from "@/shared/components/LazyImage";
import PageLayer from "@/shared/components/PageLayer";
import ArrowRight from "@/shared/icons/ArrowRight";

const SpreadWord = () => {
  const root = "https://ik.imagekit.io/cocroooiz/frontend/";
  const image = "spread-word.jpeg?updatedAt=1702359784000";

  return (
    <PageLayer className="grid gap-4">
      <Heading42 className="">Spread the word</Heading42>

      <p className="text-xl font-text font-normal text-center">
        You can support in spreading the word about our organization in your neighborhood and community. By sharing our
        mission, you can help us reach individuals who may be passionate about making a difference and would like to
        contribute their time, skills, or resources.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-10 lg:place-items-center mt-4">
        <div className="flex flex-col gap-10 my-auto">
          <h4 className="text-4xl">How you can help</h4>

          <ol className="text-xl grid gap-8 list-decimal ml-6">
            <li>
              Talk to your friends, neighbors, and colleagues about our cause. Share our mission and the impact we are
              making in Africa through education.
            </li>
            <li>
              Utilize social media platforms to spread awareness. Post about our organization, share our updates, and
              invite others to follow and support our work.
            </li>
            <li>
              Organize community gatherings or events to raise awareness. We would be happy to provide informational
              materials or a speaker to talk about our initiatives.
            </li>
          </ol>
        </div>

        <LazyImage
          style={{ height: "clamp(260px, 45vw, 393px)", maxWidth: "750px" }}
          className={`rounded-2xl w-full`}
          src={root + "tr:w-750,h-393/" + image}
          blur={root + "tr:w-50,h-50/" + image}
        />
      </div>

      <button className="btn btn-primary w-fit mx-auto">
        Volunteer <ArrowRight />
      </button>
    </PageLayer>
  );
};

export default SpreadWord;