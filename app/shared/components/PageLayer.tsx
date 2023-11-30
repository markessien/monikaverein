import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  tag?: "section" | "div" | "header" | "footer";
};

const PageLayer = ({ children, tag = "section", className = "" }: Props) => {
  const Tag = tag;
  return <Tag className={`max-w-[1572px] w-full mx-auto md:px-5 px-6 ${className}`}>{children}</Tag>;
};

export default PageLayer;
