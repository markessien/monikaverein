import PageLayer from "@/shared/components/PageLayer";
import Text from "@/shared/components/Text";

const Intro = () => {
  const text = `People's lives can be profoundly and drastically transformed as a result of donations given over time.  We can
        support education and the underprivileged in Africa in a variety of ways by giving frequently and generously.
        These joint contributions could accumulate over time to support significant initiatives, construct buildings,
        provide resources, and generate ecologically friendly solutions.`;

  return (
    <PageLayer className="flex flex-col justify-center mt-10">
      <Text size="72" tag="h1">
        <span className="inline-block">Monika Kindergarten Förderverein.</span> <br /> <span className="inline-block mt-4">Projects</span>
      </Text>

      <Text size="20" tag="p" className="text-black mt-8">
        {text}
      </Text>
    </PageLayer>
  );
};

export default Intro;
