import Link from "next/link";

const Logo = ({ className = "" }: { className?: string }) => (
  <Link href="/" className={`btn btn-ghost text-black text-4xl font-inter font-black p-0 hover:bg-transparent ${className}`}>
    LOGO
  </Link>
);

export default Logo;
