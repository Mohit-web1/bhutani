"use client";

import React from "react";
import PageTitle from "../pageTitle/page";
import { FaUserTie } from "react-icons/fa";
import { SiCoronaengine } from "react-icons/si";
import { IoConstruct } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";

const page = () => {

  const sty = "w-18 h-18"

  const data = [
    {
      icon: <FaUserTie className={sty}/>,
      name: "Happy user",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: <SiCoronaengine className={sty} />,
      name: "Excellent circle",
      desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      icon: <IoConstruct className={sty} />,
      name: "Maintenance",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      icon: <FaRegHandshake className={sty} />,
      name: "Best Partners",
      desc: "The standard chunk of Lorem Ipsum used since the 15th century is reproduced below for those interested.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <PageTitle heading="Master Cleanse Reliac Heirloom" />
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-sm">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          {data.map((item, i) => (
            <div key={i} className="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div data-aos="fade-up" className="flex flex-col justify-center space-y-3 shadow-lg shadow-slate-400 border-2 border-gray-200 px-4 py-6 rounded-lg h-[350px]">

                <div className="mx-auto">{item.icon}</div>
                
                <h2 className="title-font font-medium text-lg text-gray-600">
                  {item.name}
                </h2>
                <p className="leading-relaxed text-sm italic">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
