import Heading42 from "@/shared/components/Heading42";
import PageLayer from "@/shared/components/PageLayer";

const IntroText = () => {
  return (
    <PageLayer>
      <Heading42>An Africa where all children are educated</Heading42>

      <div className="text-black font-text text-xl sm:text-base text-center mt-5">
        At Monika Kindergarten Förderverein, our mission is to actively pursue and champion education for African
        children, empowering them with the knowledge, skills, and opportunities they need to create a brighter future
        for themselves, their communities, and the continent as a whole. <br /> We believe that education is a
        fundamental right and a powerful catalyst for transformation. Recognizing the unique challenges faced by African
        children, including poverty, limited access to quality education, and socio-economic disparities, we are
        committed to breaking down these barriers and ensuring that every child in Africa has equal opportunities to
        learn and grow.
      </div>
    </PageLayer>
  );
};

export default IntroText;
