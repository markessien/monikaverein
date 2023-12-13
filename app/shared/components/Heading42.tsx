import { ReactNode } from "react";

const Heading42 = ({
  children,
  className = "",
  tag = "h2",
}: {
  children?: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3";
}) => {
  const Tag = tag;

  return (
    <Tag
      className={`text-[42px] lg:text-4xl sm:!text-2xl font-title font-bold text-secondary-600 text-center ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading42;
