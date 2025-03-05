"use client";

import Image from "next/image";
import React from "react";
import Img1 from "@/public/assets/villa/villa1.jpg";
import Img2 from "@/public/assets/villa/villa2.jpg";
import Img3 from "@/public/assets/villa/villa3.jpg";
import Img4 from "@/public/assets/villa/villa4.jpg";

const PropertyShowcase = () => {
  return (
    <div className="flex flex-col bg-white p-6 md:p-10 lg:p-16 max-w-7xl mx-auto">
      <h1 className="text-3xl light-dance-regular mx-auto my-8 mb-10">
        What Makes Us Different
      </h1>

      {/* First section */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-6 md:gap-12">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="rounded-full bg-amber-300 w-64 h-64 sm:w-90 sm:h-90 relative flex items-center justify-center ">
            <Image
              src={Img1}
              layout="responsive"
              objectFit="cover"
              alt="City building"
              className="rounded-full"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-amber-300"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Our Proven Process for Growing Your Assets
          </h3>
          <p className="text-gray-600">
            We combine market expertise with innovative strategies to maximize
            your property investment returns. Our team of professionals will
            guide you through every step of the process, ensuring optimal
            results.
          </p>
        </div>
      </div>

      {/* Second section */}
      <div className="flex flex-col-reverse md:flex-row items-center mb-16 gap-6 md:gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Comprehensive Property Management
          </h3>
          <p className="text-gray-600">
            Professional property management services tailored to your specific
            needs. Our comprehensive approach ensures your investments are
            well-maintained and profitable.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative h-64 w-full sm:h-80 max-w-md">
            <Image
              src={Img4}
              layout="fill"
              objectFit="cover"
              alt="Office buildings"
              className="rounded-lg"
            />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-10 sm:h-10 bg-amber-300"></div>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center order-last md:order-first">
          <div className="relative h-64 w-full sm:h-80 max-w-md">
            <Image
              src={Img2}
              layout="fill"
              objectFit="cover"
              alt="Modern house"
              className="rounded-lg"
            />
            <div className="absolute -top-2 -right-2 w-10 h-5 sm:w-12 sm:h-6 bg-amber-300 rounded-b-full"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Exclusive Residential Properties
          </h3>
          <p className="text-gray-600">
            Our portfolio includes luxury homes with state-of-the-art amenities
            and stunning architecture designed for modern living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;
