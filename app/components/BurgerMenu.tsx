"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const BurgerMenu = () => {
  // This function finds whatever has focus (the dropdown) and forces it to "blur" (close)
  const closeMenu = () => {
    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
      elem.blur();
    }
  };

  return (
    <>
      <div className="fixed dropdown sm:hidden top-4 left-4 z-10 rounded-2xl">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle border-2 border-stone-400 opacity-50"
        >
          <GiHamburgerMenu className="text-2xl text-stone-400" />
        </div>
        <ul
          tabIndex={-1}
          className="menu menu-sm dropdown-content bg-stone-950 
                     rounded-box z-1 mt-3 w-32 p-2 shadow"
        >
          <li>
            <Link href="/" onClick={closeMenu} className="text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu} className="text-xl">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu} className="text-xl">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu} className="text-xl">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
