"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItemProps = { name: string; href: string };

export const NavItem = ({ name, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="text-2xl sm:text-lg !font-title uppercase !font-normal text-gray-1 data-active:text-primary data-active:font-bold data-active:underline data-active:underline-offset-4"
      data-active={isActive}
    >
      {name}
    </Link>
  );
};
