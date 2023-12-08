import Heading42 from "@/shared/components/Heading42";
import PageLayer from "@/shared/components/PageLayer";
import Item, { ItemProps } from "./Item";

const OurHistory = () => {
  return (
    <PageLayer>
      <Heading42>Our History: Where it all began</Heading42>

      <p className="text-xl font-text font-normal text-black sm:text-base text-center mt-6">
        {`Monika Kindergarten Förderverein e.V is a German non-governmental organisation (NGO) that was created to help
        Education in Africa. The association was formed in 1994 to support the project "Monika Kindergarten and
        Elementary School'' in Nigeria, Ikot Ekpene and has since then worked closely with local partners to execute
        numerous charitable projects to advance education in the South-South Region of Nigeria. Some of the projects
        executed by the Förderverein e.V include funding building expansions for Monika kindergarten and Elementary
        School and St. Paul Comprehensive Secondary School, located in Ikot Ekpene, Nigeria.  The NGO has also funded
        the establishment of primary and secondary schools in Usaka, Nigeria, and has equally partnered with some
        international organisations to sponsor the building of vocational training centres in villages, donation of
        wheelchairs, school fee support to indigent children and the sponsorship of skilled training programmes to
        complement conventional classroom teachings in order to make direct contributions to improving the living
        conditions of the poor and disadvantaged people in Nigeria.`}
      </p>

      <div className="mt-10 grid gap-10">
        {list.map((item, idx) => (
          <Item key={item.title + idx} {...item} />
        ))}
      </div>

      <p className="text-xl font-text font-normal text-black sm:text-base text-center mt-6">
        {`In order to improve people's living conditions, the level of education must be improved.
This starts at a young age.
Hence the decision to found a kindergarten.
In 1981 this bungalow is rented. It can accommodate 4 group rooms.
In the beginning, 2 educators will be hired and trained.
In the first quarter, 20 children register.
In the second quarter there are already more than 40 children and 5 employees.`}
      </p>
    </PageLayer>
  );
};

const list: ItemProps[] = [
  {
    title: "Akwa Ibom 1981",
    images: ["history-1.png?updatedAt=1702015594827", "history-2.png?updatedAt=1702015593890"],
    text: `In order to improve people's living conditions, the level of education must be improved, starting from a young age. Hence, the decision was made to establish a kindergarten, which began in 1981 by renting a bungalow capable of accommodating four group rooms. Initially, two educators were hired and trained, and in the first quarter, 20 children registered. By the second quarter, the number of children had already exceeded 40, and the staff expanded to five employees.`,
  },
  {
    title: "40 Years of Monika Kindergarten Förderverein",
    images: ["history-3.png?updatedAt=1702015606505", "history-4.png?updatedAt=1702015609410"],
    text: `In order to improve people's living conditions, the level of education must be improved.
This starts at a young age.
Hence the decision to found a kindergarten.
In 1981 this bungalow is rented. It can accommodate 4 group rooms.
In the beginning, 2 educators will be hired and trained.
In the first quarter, 20 children register.
In the second quarter there `,
  },
];

export default OurHistory;
