"use client";

import { NavLink } from "./NavLink";

const NavBar = () => {
  return (
    <div role="tablist" className="tabs tabs-border gap-5">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/services">Services</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </div>
  );
};

export default NavBar;
