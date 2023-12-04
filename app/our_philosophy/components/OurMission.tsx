import LazyImage from "@/shared/components/LazyImage";
import PageLayer from "@/shared/components/PageLayer";

const OurMission = () => {
  return (
    <PageLayer>
      <h2 className="text-4xl sm:text-2xl font-bold font-title text-center">Our mission: The pursuit of Education</h2>

      <div className="flex justify-between items-center gap-8 mt-8 lg:flex-col">
        <p className="w-[50%] lg:w-full text-black text-xl sm:text-base font-text">
          Our goal is to support the needy and promote education in Africa. Through strategic partnerships, it is
          possible for us to put smiles on the faces of African Children, especially those who are not in school. <br />{" "}
          Our mission is to create a transformative impact in African communities through education, fostering
          sustainable development and empowering lives. With a strong commitment to equality and inclusivity, we strive
          to bridge the educational gap and provide every child, regardless of their background or circumstances, with
          equal opportunities. <br /> Through the establishment of schools, training of teachers, and provision of
          essential resources, our aim is to build an inclusive and high-quality education system that equips students
          with the knowledge and skills necessary for their success. <br /> By working collaboratively, we seek to break
          the cycle of poverty, promote gender equality, and inspire a new generation of change agents who will shape
          the future of Africa. We firmly believe that education is the key to unlocking the untapped potential within
          individuals and fostering a brighter and more prosperous Africa for all.
        </p>

        <LazyImage
          className="w-[45%] h-[443px] lg:w-[60%] md:!w-full sm:h-[260px]"
          src="https://ik.imagekit.io/cocroooiz/frontend/our_mission.jpeg?updatedAt=1701681010250"
          blur="https://ik.imagekit.io/cocroooiz/frontend/tr:w-50,h-50/our_mission.jpeg?updatedAt=1701681010250"
        />
      </div>
    </PageLayer>
  );
};

export default OurMission;
