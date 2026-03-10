"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "We highly recommend Katsbooks ... prompt, efficient and accurate. They are very responsive and informative. Katsbooks is a valuable partner in the success of our business",
    author: "- Jordan M.",
  },
  {
    text: "We have been using Katsbooks to handle our payroll, accounts payable, government compliance and general bookeeping for two years now and she is excellent at her work.",
    author: "- Sunshine O.",
  },

  {
    text: "Professional and talented!",
    author: "- Smoke D.",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <span className="w-full text-center">
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-60 transition-all duration-500">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            } flex items-center justify-center px-4`}
          >
            <blockquote className="max-w-2xl text-lg italic text-zinc-700 leading-relaxed">
              “{testimonial.text}”
              <footer className="mt-4 font-semibold block">
                {testimonial.author}
              </footer>
            </blockquote>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mb-5">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`btn btn-sm ${
              current === index ? "btn-primary" : "btn-outline text-primary"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </span>
  );
};

export default TestimonialCarousel;
