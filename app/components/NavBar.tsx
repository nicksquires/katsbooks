"use client";

import { NavLink } from "./NavLink";

const NavBar = () => {
  return (
    <div role="tablist" className="tabs tabs-border gap-5">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/services">Services</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>

      {/* <a role="tab" className="tab text-3xl">
        HOME
      </a>
      <a role="tab" className="tab tab-active text-3xl">
        PRICING
      </a>
      <a role="tab" className="tab text-3xl">
        ABOUT
      </a>
      <a role="tab" className="tab text-3xl">
        CONTACT
      </a> */}
    </div>
  );
};

export default NavBar;
