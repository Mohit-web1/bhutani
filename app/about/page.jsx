"use client";

import Image from "next/image";
import React from "react";
import Img from "@/public/assets/Cimg5.jpg";
import PageTitle from "../components/pageTitle/page";

const AboutPage = () => {
  return (
    <div className="mx-auto ">
      {/* Carousel Section */}
      <div className="relative w-full h-[400px] rounded-b-2xl overflow-hidden shadow-lg">
        <Image
          src={Img}
          alt="Luxury Villa"
          layout="fill"
          objectFit="cover"
          className="rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <PageTitle heading="Luxury Living Awaits" />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col space-y-6 py-18 text-center">
        <h1 className="light-dance-regular">About Us</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">Dream Estates</span>, where
          we bring you the finest luxury real estate properties. Our mission is
          to connect buyers with premium properties that meet their aspirations
          and lifestyle.
        </p>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
          With years of experience in the real estate industry, we specialize in
          offering modern villas, apartments, and commercial spaces in prime
          locations. Whether you're looking for a dream home or a profitable
          investment, we are here to guide you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
