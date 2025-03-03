"use client";

import React from "react";
import Image from "next/image";
import Img from "@/public/assets/info.jpg";
import PageTitle from "../pageTitle/page";

const Page = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={Img}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />

      {/* Content */}
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center opacity-80 rounded-lg shadow-lg relative">
          <PageTitle heading="Versions" />

          <p className="leading-relaxed text-sm sm:text-lg ">
            Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
            taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
            taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid
            fanny pack vaporware. Man bun next level coloring book skateboard
            four loko knausgaard. Kitsch keffiyeh master cleanse direct trade
            indigo juice before they sold out gentrify plaid gastropub normcore
            XOXO 90's pickled cindigo jean shorts. Slow-carb next level
            shoindigoitch ethical authentic, yr scenester sriracha forage
            franzen organic drinking vinegar.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-sm">
            HOLDEN CAULFIELD
          </h2>
          <p className="text-white">Senior Product Designer</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
