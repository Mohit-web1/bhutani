"use client";

import React from "react";

const GlassCard = ({ title, desc, icon }) => {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          CATEGORY
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          Selvage Poke Waistcoat Godard
        </h1>
        <p className="leading-relaxed mb-3">
          Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
          microdosing tousled waistcoat.
        </p>
        <a className="text-indigo-500 inline-flex items-center">
          Learn More
         
        </a>
       
      </div>
    </div>
  );
};

export default GlassCard;
