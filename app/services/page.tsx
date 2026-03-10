import React from "react";
import { ServicesList } from "../components/ServicesList";
import { PriceList } from "../components/PriceList";

const page = () => {
  return (
    <div className="bg-stone-50 p-10 flex flex-col items-center text-center">
      <h2 className="text-7xl font-semibold opacity-85 text-green-500">
        Services
      </h2>

      <p className="text-stone-800 font-semibold opacity-85 text-3xl m-15">
        Great range of highly affordable services
      </p>

      <p className="text-stone-500 opacity-90 max-w-3xl text-2xl font-light">
        From individual needs to medium-sized businesses, check out my currently
        offered services:
      </p>
      <div className="flex max-w-4xl mt-15">
        <ServicesList />
      </div>

      {/* <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full mt-8">
        <div className="w-full md:flex-1 max-w-150">
          <ServicesList />
        </div>

        <div className="divider divider-vertical lg:divider-horizontal"></div>
        <div className="w-full md:flex-1 flex justify-center max-w-150">
          <PriceList />
        </div>
      </div> */}

      {/* <div className="flex-1 max-w-150">
        <p className="text-stone-800 opacity-85 text-3xl mt-15 m-10">
          Book a consultation with me today!
        </p>

        <a href="mailto:kat.cutler.ryan@gmail.com"></a>
      </div> */}
    </div>
  );
};

export default page;
