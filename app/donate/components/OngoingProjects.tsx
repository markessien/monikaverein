import Heading42 from "@/shared/components/Heading42";
import PageLayer from "@/shared/components/PageLayer";
import ProjectCard, { ProjectCardProps } from "@/shared/components/ProjectCard";

const OngoingProjects = () => {
  return (
    <PageLayer>
      <Heading42>Urgent ongoing projects</Heading42>

      <div className="flex flex-col gap-10 mt-16">
        {list.map((item, idx) => (
          <ProjectCard key={idx} {...item} />
        ))}
      </div>
    </PageLayer>
  );
};

const list: ProjectCardProps[] = [
  {
    image: "toys-and-teaching-aids.png?updatedAt=1701677489083",
    amount: {
      expected: 150_000,
      raised: 15_000,
    },
    title: "Toys and Teaching Aids for Kindergarten Children",
    text: `We understand the role teaching aids play ensuring effective learning. With your support, we regularly update the teaching aid and learning toys of children in our partner schools. Your donation could go a long way to make a significant difference in their learning.`,
  },
  {
    image: "donation-result-wheel-chairs.png?updatedAt=1701230760071",
    amount: {
      expected: 150_000,
      raised: 13_000,
    },
    title: "Wheelchair Donations to Communities",
    text: `The Wheelchair project is a special and continuous project that we carry out on a regular basis. With your support, we can make life more meaningful for those in special needs. Be part of this life changing opportunity.`,
  },
];

export default OngoingProjects;
