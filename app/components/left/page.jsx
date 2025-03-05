"use client";

import React from "react";
import Img from "@/public/assets/Left.jpg";
import Image from "next/image";

const Left = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div data-aos="zoom-in-right" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 border border-slate-400 p-3 rounded-lg">
          <Image 
            src={Img}
            alt="img"
            height={100}
            width={100}
            layout="responsive"
            className="rounded-md"
          />
        </div>
        <div data-aos="zoom-in-left" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Knausgaard typewriter readymade marfa
          </h1>
          <p className="mb-8 leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Left;
