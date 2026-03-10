"use client";

import React from "react";
import Image from "next/image";
import kr from "../../public/img/kat_ryan_headshot.png";
import sg from "../../public/img/sage.png";
import qb from "../../public/img/quickbooks_logo.png";
import Button from "../components/Button";
import { AiOutlineMail } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";
import { useState } from "react";

const page = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const phoneNumber = "519-216-7638";
  const maskedNumber = "519-xxx-xx38";

  const handleToggle = (e: React.MouseEvent) => {
    if (!isRevealed) {
      // Prevent the actual "tel:" link from firing on the first click
      e.preventDefault();
      setIsRevealed(true);
    }
  };

  return (
    <div className="bg-stone-50 p-10 flex flex-col items-center text-center">
      <h2 className="text-7xl font-semibold opacity-85 text-blue-500">About</h2>
      <p className="text-stone-600 opacity-95 max-w-4xl text-2xl my-15 mx-5 md:m-15">
        Independent accounting and bookkeeping firm owner Kathryn Ryan is always
        ready to meet your needs
      </p>
      <div className="divider divider-vertical"></div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={kr}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Headshot of Kat Ryan"
          />
          <div>
            <h3 className="text-stone-800 opacity-90 text-5xl font-bold">
              Kat Ryan - Owner
            </h3>

            <h4 className="text-stone-700 text-2xl mt-5">A Word from Kat</h4>

            <div className="flex flex-col py-6 px-3 text-stone-800 opacity-90 items-center">
              <p className="text-left">
                Hi, I'm Kathryn Ryan, Kat for short. Katsbooks is an independent
                Bookkeeping firm providing bookeeping services to clients in
                Orangeville and the surrounding area, owned and operated
                exclusively by me!
                <br />
                <br />
                Katsbooks provides accurate and reliable bookkeeping services,
                and has experience with a variety of businesses. I specialize in
                Quickbooks online but also have experience with Quickbooks
                Desktop, Sage, and other programs. I graduated with honours from
                Georgian College Bookkeeping course a few years ago and changed
                careers.
                <br />
                <br />
                I love my work and enjoy helping small business owners manage
                their day to day bookkeeping so they focus on growing and
                maintaining their businesses. I am committed to providing
                superior and reliable services through practical,
                customer-focused, strategic solutions to help her clients
                increase their profitability and help them reach their maximum
                potential.
                <br />
                <br />
                Katsbooks has been handling the bookkeeping needs of 20 varied
                clients for the last few years. Before that I trained at an
                accounting firm and learned how businesses can handle their
                bookkeeping needs most effectively.
                <br />
                <br />
                Katsbooks is a home operated business, located at 39 Carlton
                Drive in Orangeville. I would be happy to hear from you and
                discuss your bookkeeping needs. Please feel free to email&nbsp;
                <a
                  href="mailto:kat.cutler.ryan@gmail.com"
                  className="link font-medium"
                >
                  kat.cutler.ryan@gmail.com
                </a>
                , text or call&nbsp;
                <a
                  href={
                    isRevealed ? `tel:${phoneNumber.replace(/-/g, "")}` : "#"
                  }
                  onClick={handleToggle}
                  className={`transition-all duration-300 font-medium link ${
                    isRevealed
                      ? "cursor-pointer"
                      : "cursor-help border-b border-dotted border-slate-400"
                  }`}
                  title={
                    isRevealed ? "Call now" : "Click to reveal phone number"
                  }
                >
                  {isRevealed ? phoneNumber : maskedNumber}
                </a>
                .
              </p>
              <div className="flex-col flex items-center md:flex-row gap-3">
                {/** Email button */}
                <a href="mailto:kat.cutler.ryan@gmail.com">
                  <Button color="green">
                    <AiOutlineMail />
                    Email
                  </Button>
                </a>

                {/** Call button uses state to hide number*/}
                <a
                  href={
                    isRevealed ? `tel:${phoneNumber.replace(/-/g, "")}` : "#"
                  }
                  onClick={handleToggle}
                  className="transition-all duration-300 font-medium"
                  title={
                    isRevealed ? "Call now" : "Click to reveal phone number"
                  }
                >
                  <Button color="orange">
                    <HiPhone />
                    {isRevealed ? phoneNumber : maskedNumber}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End Hero */}
      <div className="divider divider-vertical"></div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full mt-8">
        {/* Left Column */}
        <div className="w-full md:flex-1 max-w-40">
          <Image src={sg} alt="Sage logo" />
        </div>

        {/* Right Column */}
        <div className="w-full md:flex-1 flex justify-center max-w-40">
          <Image src={qb} alt="Sage logo" />
        </div>
      </div>
    </div>
  );
};

export default page;
