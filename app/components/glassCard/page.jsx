"use client";

import React from "react";
import { FaHouseUser } from "react-icons/fa";

const GlassCard = ({ title, desc, icon, dataaos }) => {
  return (
    <div data-aos={dataaos} className="p-4 lg:w-1/3">
      <div className="h-full bg-black opacity-60 backdrop-blur-lg px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative hover:shadow-slate-50 shadow-md shadow-slate-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          CATEGORY
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
          {title || "Selvage Poke Waistcoat Godard"}
        </h1>
        <p className="leading-relaxed mb-3 text-gray-300">
          {desc || "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}
        </p>
        <a className="text-indigo-300 inline-flex items-center hover:text-indigo-200 cursor-pointer">
          Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
          <div className="text-white absolute top-4 right-4">
            <FaHouseUser />
          </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-40"></div>
      </div>
    </div>
  );
};

export default GlassCard;