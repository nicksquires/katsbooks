"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname(); // grab the current URL

  // Normalization of pathname for handling with WHC: (demo: Remove trailing slashes for the comparison)
  const normalize = (path: string) =>
    path === "/" ? path : path.replace(/\/$/, "");

  const isActive = normalize(pathname) === normalize(href);
  // old way before WHC adjustment (for reference):
  // const isActive = pathname === href;

  return (
    <Link
      role="tab"
      href={href}
      className={`tab hidden sm:flex text-3xl transition-all opacity-85 duration-200 ${
        isActive
          ? "text-green-400 font-semibold tab-active"
          : "text-slate-200 hover:brightness-125"
      }`}
    >
      {children}
    </Link>
  );
}
