import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3";
};

const Heading42 = ({ children, className = "", tag = "h2" }: Props) => {
  const Tag = tag;

  return (
    <Tag
      className={`text-[42px] lg:text-4xl sm:!text-3xl !font-title !font-bold text-secondary-600 text-center ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading42;
