import PageLayer from "@/shared/components/PageLayer";
import Item, { ItemProps } from "./Item";
import Text from "@/shared/components/Text";

const Accomplished = () => {
  return (
    <PageLayer className="grid gap-12" id="accomplished">
      <Text size="42" tag="h2">
        Accomplished Projects
      </Text>

      <Text size="20" tag="p" className="-mt-8">
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
    images: ["accomplished-1.png?updatedAt=1701490242271", "donation-result-completed-library-2.png?updatedAt=1701231368410"],
    text: "With your unwavering support and through our “Back to School Project”, we have been able to get over 5000 children off the streets and back to school. This accomplishment is proof of the potent combination of kindness and collaborative effort. We are giving these kids a chance for a better future by granting them the opportunity to attend school. Their lives have been changed forever by your kindness, which is a strategic effort to ending the cycle of poverty and unlocking doors of opportunity for the children.",
  },
  {
    title: "Regular donation of wheelchairs to those in need.",
    images: ["donation-result-wheel-chairs.png?updatedAt=1701230760071", "project-wheelchair.png?updatedAt=1701509169200"],
    text: "Because of your kind donations, we have been able to continuously provide wheelchairs to persons in need. These wheelchairs, which permit users to move about their surroundings freely and with respect, have significantly changed the lives of many people. Every donation brings joy, smiles, and fresh possibilities to those whose mobility was previously constrained.",
  },
  {
    title: "Donation of school blocks",
    images: ["our-philosophy.jpeg?updatedAt=1701316112948", "accomplished-2.jpeg?updatedAt=1701491547469"],
    text: "Your contributions over the years have had significant impacts on us. Our partner schools in Nigeria have successfully received new school buildings and basic school supplies for school children from your contributions.",
  },
];

export default Accomplished;
