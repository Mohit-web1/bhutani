"use client";

import React from "react";
import Image from "next/image";
import Img from "@/public/assets/CardImg.jpg";
import PageTitle from "../pageTitle/page";
import GlassCard from "../glassCard/page";

const Cards = () => {
  const data = [
    {
      id: 1,
      title: "Selvage Poke Waistcoat Godard",
      animate: "zoom-in-right",
      description:
        "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    },
    {
      id: 2,
      title: "Version 2",
      animate: "zoom-in-up",
      description:
        "Donec semper enim vel felis faucibus, ac consectetur metus faucibus. Sed non neque euismod, tincidunt lectus vitae, tincidunt purus. Nulla facilisi.",
    },
    {
      id: 3,
      title: "Version 3",
      animate: "zoom-in-left",
      description:
        "Ut tincidunt, nunc eu sodales pulvinar, arcu lectus malesuada lectus, vel consectetur felis neque id justo. Nulla facilisi.",
    },
  ];

  return (
    <section className="relative w-full">
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
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((item, i) => (
                <GlassCard key={i} dataaos={item.animate} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cards;
