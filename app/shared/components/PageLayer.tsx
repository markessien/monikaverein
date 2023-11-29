import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  tag?: "section" | "div" | "header";
};

const PageLayer = ({ children, tag = "section", className = "" }: Props) => {
  const Tag = tag;
  return <Tag className={`max-w-[1572px] mx-auto md:px-5 ${className}`}>{children}</Tag>;
};

export default PageLayer;
