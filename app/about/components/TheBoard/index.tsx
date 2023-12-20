import Text from "@/shared/components/Text";
import PageLayer from "@/shared/components/PageLayer";
import Item, { ItemProps } from "./Item";

const TheBoard = () => {
  return (
    <PageLayer id="organization">
      <Text size="42" tag="h2">
        Our Organization: The Monika Kindergarten Förderverein Association
      </Text>

      <h3 className="text-4xl font-title font-bold text-center sm:text-2xl mt-10">The board of directors</h3>

      <p className="text-xl font-text font-normal text-black sm:text-base mt-6 mb-10">
        {`The board of directors, comprised of four dedicated full-time members, assumes the responsibility of managing and overseeing the operations of the association in accordance with its established statute. With their collective expertise and strategic vision, the board diligently guides and directs the business affairs of the organization. Each member brings a unique skill set and perspective to the table, ensuring a well-rounded decision-making process. Through their conscientious efforts, the board upholds the principles and objectives set forth in the association's statute, fostering a foundation of stability and adherence to governing guidelines. By working harmoniously, the board of directors plays a pivotal role in the successful functioning and governance of the associatio`}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
        {list.map((item, idx) => (
          <Item key={item.name + idx} {...item} />
        ))}
      </div>
    </PageLayer>
  );
};

const list: ItemProps[] = [
  {
    pic: "christiana-sow.jpeg?updatedAt=1703060795751",
    name: "Cristiana Sow",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
    bio: "Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convallLorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall",
  },
  {
    pic: "mark-essien.png?updatedAt=1702203832435",
    name: "Mark Essien",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
    bio: "Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convallLorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall",
  },
  {
    pic: "sedina-sonarinwo.png?updatedAt=1702203652825",
    name: "Sedina Sonarinwo",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
    bio: "Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convallLorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall",
  },
  {
    pic: "thomas-essien.png?updatedAt=1702203653402",
    name: "Thomas Essien",
    role: "Chief Executive Officer",
    linkedin: "",
    twitter: "",
    instagram: "",
    bio: "Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convallLorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convalli. Lorem ipsum dolor sit amet consectetur. Fringilla habitasse consectetur. Fringilla habitasse auctor nulla convall",
  },
];

export default TheBoard;
