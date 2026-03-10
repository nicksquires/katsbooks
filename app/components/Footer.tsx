"use client";

import Image from "next/image";
import logo from "@/public/img/katsbooks_logo1.png";
import Link from "next/link";
import { useState } from "react";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const phoneNumber = "519-216-7638";
  const maskedNumber = "519-xxx-xx38";

  // Prevent "tel:" link from firing on first click
  const handleToggle = (e: React.MouseEvent) => {
    if (!isRevealed) {
      e.preventDefault();
      setIsRevealed(true);
    }
  };

  return (
    <>
      <footer className="footer sm:footer-horizontal bg-accent-content p-10 font-poppins text-neutral-50">
        <aside className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="mb-2">
              <Image
                src={logo}
                alt="Bruce Group LLC logo"
                className="h-18 w-13"
              />
            </div>
            <div>
              <p className="justify-center mt-2">
                © 2026 Katsbooks. All rights reserved.
              </p>
            </div>
          </div>
        </aside>

        <nav>
          <h4 className="footer-title text-red-300">Site Links</h4>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/pricing" replace className="link link-hover">
            Pricing
          </Link>
          <Link href="/about" replace className="link link-hover">
            About
          </Link>
          <Link href="/contact" replace className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h4 className="footer-title text-red-300">Legal</h4>
          <Link href="/privacy" replace className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/privacy" replace className="link link-hover">
            Terms of Use
          </Link>
          <Link href="/privacy#cookies" replace className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <span>
          <h4 className="footer-title text-red-300">ORANGEVILLE OFFICE</h4>
          <p>
            39 Carlton Drive
            <br />
            Orangeville, ON
            <br />
            L9W 2X8
            <br />
            <a
              href={isRevealed ? `tel:${phoneNumber.replace(/-/g, "")}` : "#"}
              onClick={handleToggle}
              className={`transition-all duration-300 font-medium ${
                isRevealed
                  ? "text-orange-500 cursor-pointer"
                  : "text-orange-700 cursor-help border-b border-dotted border-slate-400"
              }`}
              title={isRevealed ? "Call now" : "Click to reveal phone number"}
            >
              {isRevealed ? phoneNumber : maskedNumber}
            </a>
          </p>
        </span>
      </footer>
    </>
  );
};

export default Footer;
