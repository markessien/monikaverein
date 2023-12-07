import Heading42 from "@/shared/components/Heading42";
import PageLayer from "@/shared/components/PageLayer";

const Intro = () => {
  return (
    <PageLayer className="flex flex-col justify-center items-center gap-4">
      <Heading42>Building of a Special School Block for Inclusive Education</Heading42>
      <p className="text-xl font-text font-normal text-center max-w-[895px] mx-auto sm:text-lg">
        We are currently expanding our school reach program to provide an opportunity for children with hearing
        challenges to have a proper inclusive education, and an opportunity to a better living.
      </p>

      <button className="btn btn-primary mt-4">Donate Now</button>
    </PageLayer>
  );
};

export default Intro;
