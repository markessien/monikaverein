import PageLayer from "@/shared/components/PageLayer";
import Item, { ItemProps } from "./Item";
import Text from "@/shared/components/Text";

const Accomplished = () => {
  return (
    <PageLayer className="grid gap-12" id="accomplished">
      <Text size="42" tag="h2" className="text-justify">
        Accomplished Projects
      </Text>

      <Text size="20" tag="p" className="-mt-8 text-justify">
        With your support, we have been able to accomplish a lot of projects in Nigeria. The cumulative effect of little contributions has led to
        considerable change, improved quality of life, community empowerment, and an enduring testament to being kind. Every year that goes by, the
        impact of these donations continues to transform the world and touch countless lives in Nigeria and Africa at large.
      </Text>

      {list.map((item, idx) => (
        <Item key={idx} {...item} />
      ))}
    </PageLayer>
  );
};

const list: ItemProps[] = [
  {
    title: "More than 5000 street kids have received sponsorships to return to school.",
    images: [
      "from%20streets%20back%20to%20school.jpg?updatedAt=1703042888147",
      "from%20streets%20back%20to%20school%202.JPG?updatedAt=1703042900093",
    ],
    text: "With your unwavering support and through our “Back to School Project”, we have been able to get over 5000 children off the streets and back to school. This accomplishment is proof of the potent combination of kindness and collaborative effort. We are giving these kids a chance for a better future by granting them the opportunity to attend school. Their lives have been changed forever by your kindness, which is a strategic effort to ending the cycle of poverty and unlocking doors of opportunity for the children.",
  },
  {
    title: "Regular donation of wheelchairs to those in need.",
    images: ["Demca-Wheel%20Chair-Donation%20with-Monika.jpg?updatedAt=1703042751805", "Demca%20Wheelchair%20donation.png?updatedAt=1703042781168"],
    text: "Because of your kind donations, we have been able to continuously provide wheelchairs to persons in need. These wheelchairs, which permit users to move about their surroundings freely and with respect, have significantly changed the lives of many people. Every donation brings joy, smiles, and fresh possibilities to those whose mobility was previously constrained.",
  },
  {
    title: "Donation of school blocks",
    images: ["our-philosophy.jpeg?updatedAt=1703044694917", "accomplished-2.jpeg?updatedAt=1703044736607"],
    text: "Your contributions over the years have had significant impacts on us. Our partner schools in Nigeria have successfully received new school buildings and basic school supplies for school children from your contributions.",
  },
];
export default Accomplished;
