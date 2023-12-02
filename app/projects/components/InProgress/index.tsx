import Heading42 from "@/shared/components/Heading42";
import PageLayer from "@/shared/components/PageLayer";
import Item, { ItemProps } from "./Item";

const InProgress = () => {
  return (
    <PageLayer className="grid gap-12">
      <Heading42>Projects Currently in Progress</Heading42>

      <p className="text-xl font-normal font-text text-black text-center -mt-8 sm:text-base">
        We are currently working on a number of intriguing projects. To assure our success, we are actively looking for
        donations from kindhearted people like you. As we work to achieve great results, we really appreciate your
        patience and support. Please pick a cause and make a donation. We're moving forward and succeeding greatly as a
        team!
      </p>

      <div className="grid gap-4">
        <h3 className="font-bold font-title mb-4 text-4xl text-center sm:text-2xl">Urgent</h3>

        <p className="font-text text-xl font-normal text-black sm:text-base mb-4">
          These initiatives are meant to address urgent problems and have a real effect on the lives of individuals who
          are less privileged. By making a donation now, you can play a crucial part in assisting us bring these
          initiatives to life and bringing about great change. Your support will directly help to the accomplishment of
          these efforts, allowing us to attain our objectives and truly make a difference. With your kind assistance, we
          can work together to have a profound and long-lasting impact in the lives of African children.
        </p>

        <div className="flex flex-col gap-10">
          {list.map((item, idx) => (
            <Item key={idx} {...item} />
          ))}
        </div>
      </div>

      {/* <div>
        <h3 className="font-bold font-title mb-4 text-4xl text-center sm:text-2xl">
          Building and Construction Projects
        </h3>

        <p className="font-text text-xl font-normal text-black sm:text-base mb-4">
          We need immediate funds for vital construction projects that will expand partner schools, make them safer, and
          improve infrastructure. Your donation will directly contribute to creating lasting benefits for students and
          the community.
        </p>
      </div> */}
    </PageLayer>
  );
};

const list: ItemProps[] = [
  {
    image: "donation-result-evening-school.png?updatedAt=1701230760275",
    amount: {
      expected: 150_000,
      raised: 15_000,
    },
    title: "School fees funding for street children",
    text: `Our back-to-school project is aimed at reducing the number of children roaming and hawking on the streets instead of being in school. Yearly, we sponsor between 500 to 1000 children by paying their school fees. Help us to reachout to more by kindly contributing to this cause.`,
  },
  {
    image: "need-1.jpeg?updatedAt=1701524512151",
    amount: {
      expected: 150_000,
      raised: 15_000,
    },
    title: "Building of a Special School Block for Inclusive Education",
    text: `To give kids with hearing impairments the chance to get an appropriate, inclusive education and a chance at a better life, we are currently expanding our school reach programme. We need your support to make this a success`,
  },
];

export default InProgress;
