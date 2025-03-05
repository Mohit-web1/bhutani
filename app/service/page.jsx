"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import Img from "@/public/assets/cont.jpg";
import Image from "next/image";
import CustomButton from "../components/customButton/page";
import PageTitle from "../components/pageTitle/page";
import bgImg from "@/public/assets/contact.jpg";

const Service = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src={Img}
          alt="img"
          height={100}
          width={100}
          layout="responsive"
          className="absolute inset-0  bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">

            <PageTitle heading="Our Deals for your Business" />
          
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-16">
       
      </div>
    </div>
  );
};

export default Service;
