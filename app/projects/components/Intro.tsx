import PageLayer from "@/shared/components/PageLayer";

const Intro = () => {
  const text = `People's lives can be profoundly and drastically transformed as a result of donations given over time.  We can
        support education and the underprivileged in Africa in a variety of ways by giving frequently and generously.
        These joint contributions could accumulate over time to support significant initiatives, construct buildings,
        provide resources, and generate ecologically friendly solutions.`;

  return (
    <PageLayer className="flex flex-col justify-center mt-10">
      <h1 className="text-7xl text-center font-bold font-title text-sec xl:text-5xl sm:!text-3xl md:!text-4xl">
        <span className="inline-block">Monika Kindergarten Förderverein.</span> <br />{" "}
        <span className="inline-block mt-4">Projects</span>
      </h1>

      <p className="text-xl font-normal font-text text-black text-center mt-8 sm:text-base">{text}</p>
    </PageLayer>
  );
};

export default Intro;