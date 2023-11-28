import Link from "next/link";

export type NavItemProps = { name: string };

export const NavItem = ({ name }: NavItemProps) => (
  <Link
    href="/"
    className="text-xl font-title uppercase font-normal text-gray-1"
  >
    {name}
  </Link>
);
