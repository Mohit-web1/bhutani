"use client";

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { FaPlusSquare, FaBars, FaTimes } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const data = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-5 grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Logo */}
        <a data-aos="fade-right" className="flex items-center font-medium">
          <FaPlusSquare
            className={`text-2xl ${
              scrolling ? "text-slate-700" : "text-white"
            }`}
          />
          <h1 className='text-6xl font-bold text-blue-500'>B</h1>
          <span
            className={`text-xl ${
              scrolling ? "text-slate-700" : "text-white"
            } `}
          >
            Bhutani
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          data-aos="fade-down"
          className="hidden md:flex justify-center space-x-6"
        >
          {data.map((item, i) => (
            <Link key={i} href={item.path} >
              <span
                className={`hover:text-blue-300 ${
                  scrolling ? "text-slate-700" : "text-white"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop Button (Aligned Right) */}
        <div data-aos="fade-left" className="hidden md:flex justify-end">
          <button className="flex space-x-2 cursor-pointer items-center bg-blue-500 text-white px-4 py-2 w-[100px]">
            <ImLocation2 />
            <span> Visit </span>
          </button>
        </div>

        {/* Mobile Menu Toggle (Right Aligned) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl justify-self-end"
        >
          {isOpen ? (
            <FaTimes
              className={`${scrolling ? "text-slate-600" : "text-white"}`}
            />
          ) : (
            <FaBars
              className={`${scrolling ? "text-slate-600" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="w-full flex flex-col items-start space-y-4 p-4 ">
          {data.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="w-full text-gray-900 hover:text-blue-500 border-b border-slate-700"
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Mobile Visit Button */}
        {/* <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Visit
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
