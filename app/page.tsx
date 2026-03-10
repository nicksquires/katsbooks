import Button from "./components/Button";
import ServicesCard from "./components/ServicesCard";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-stone-50 p-10 flex flex-col items-center text-center">
      <h2 className="text-7xl font-semibold opacity-85 text-orange-500">
        Welcome
      </h2>

      <p className="text-stone-800 font-semibold opacity-85 text-3xl m-15">
        Orangeville's most reliable accounting service
      </p>

      <p className="text-stone-500 opacity-90 max-w-3xl text-2xl font-light">
        Hi, I'm Kat! I provide accurate and reliable bookkeeping services, and
        am actively handling over 20 varied businesses in the following
        categories:
      </p>

      <div className="mt-10">
        <ServicesCard />
      </div>

      <p className="text-stone-800 opacity-85 text-3xl mt-15 m-10">
        Book a consultation with me today!
      </p>

      <div className="flex flex-col max-w-150">
        <a href="mailto:kat.cutler.ryan@gmail.com">
          <Button color="orange">
            <IoCalendarNumberOutline />
            Request Booking
          </Button>
        </a>
      </div>

      <div className="divider mt-25"></div>

      <div className="flex flex-col justify-center items-center w-full">
        <TestimonialCarousel />
        <Button color="green">
          <FaPencilAlt /> Write Review
        </Button>
      </div>
    </div>
  );
}
