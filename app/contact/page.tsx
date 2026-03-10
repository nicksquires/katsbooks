"use client";

import React, { useState } from "react";
import { HiPhone, HiClock, HiLocationMarker, HiMail } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import Button from "../components/Button";
import { IconCard } from "../components/IconCard";

const page = () => {
  const [isRevealed, setIsRevealed] = useState(false); // phone number mask toggle
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
    <div className="bg-stone-50 p-10 flex flex-col items-center text-center">
      <h2 className="text-7xl font-semibold opacity-85 text-red-500">
        Contact
      </h2>

      <p className="text-stone-800 font-semibold opacity-85 text-3xl m-15">
        Achieve your goals with Kat today!
      </p>

      <p className="text-stone-500 opacity-90 max-w-3xl text-2xl font-light">
        Independent accounting and bookkeeping firm owner Kathryn Ryan is always
        ready to meet your needs
      </p>

      <section className="p-4 md:p-10 bg-stone-50 min-h-screen">
        {/* 2x2 Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 max-w-8xl mx-auto">
          {/* 1. Contact Card */}
          <IconCard icon={<IoIosContact />} title="Kat Ryan">
            <div className="space-y-6 flex flex-col items-center">
              <div>
                <p className="text-xl font-semibold text-slate-700">
                  <a
                    href={
                      isRevealed ? `tel:${phoneNumber.replace(/-/g, "")}` : "#"
                    }
                    onClick={handleToggle}
                    className={`transition-all duration-300 font-medium ${
                      isRevealed
                        ? "cursor-pointer link"
                        : "cursor-help border-b border-dotted border-slate-400"
                    }`}
                    title={
                      isRevealed ? "Call now" : "Click to reveal phone number"
                    }
                  >
                    {isRevealed ? phoneNumber : maskedNumber}
                  </a>
                </p>
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
              <div className="flex flex-col items-center">
                <p className="text-lg text-slate-600">
                  <a
                    href="kat.cutler.ryan@gmail.com"
                    className="link font-medium text-xl"
                  >
                    kat.cutler.ryan@gmail.com
                  </a>
                </p>
                <a href="mailto:kat.cutler.ryan@gmail.com">
                  <Button color="green">
                    <HiMail />
                    Email
                  </Button>
                </a>
              </div>
            </div>
          </IconCard>

          {/* 2. Hours Card */}
          <IconCard icon={<HiClock />} title="Hours">
            <table className="w-full text-left text-slate-700">
              <tbody>
                {["MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                  <tr
                    key={day}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="py-1 font-bold">{day}:</td>
                    <td className="py-1 text-right">8:00 AM - 8:00 PM</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-1 font-bold">SUN:</td>
                  <td className="py-1 text-right text-red-500 font-bold">
                    CLOSED
                  </td>
                </tr>
              </tbody>
            </table>
          </IconCard>

          {/* 3. Location Card */}
          <IconCard icon={<HiLocationMarker />} title="Location">
            <div className="text-slate-700 text-lg space-y-1 mb-4">
              <p>39 Carlton Drive</p>
              <p>Orangeville, Ontario</p>
              <p>L9W 2X8 Canada</p>
            </div>
            <a
              href="https://www.google.com/maps?q=39+Carlton+Drive+Orangeville+Ontario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button color="teal">Get Directions</Button>
            </a>
          </IconCard>

          {/* 4. Map Panel (Matching the Card Style) */}
          <div
            className="w-full h-full min-h-120 rounded-3xl 
                          shadow-lg border border-slate-200 
                          overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.467824160416!2d-80.1118646!3d43.9186414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b904944485555%3A0x7d6c6e76e5e5e5e5!2s39%20Carlton%20Dr%2C%20Orangeville%2C%20ON%20L9W%202X8!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
