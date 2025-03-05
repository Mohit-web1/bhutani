"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import Img from "@/public/assets/cont.jpg";
import Image from "next/image";
import CustomButton from "../components/customButton/page";
import PageTitle from "../components/pageTitle/page";
import bgImg from "@/public/assets/contact.jpg";

const Contact = () => {
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
          <PageTitle heading="Get in Touch" />
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaPhone, 
              title: "Phone", 
              content: "+1 (555) 123-4567",
              animate : "fade-up" 
            },
            {
              icon: FaEnvelope,
              title: "Email",
              content: "contact@example.com",
              animate : "fade-down" 
            },
            {
              icon: FaMapMarkerAlt,
              title: "Address",
              content: "123 Business Ave, Suite 100",
              animate : "fade-up", 
            },
            { icon: FaClock, 
              title: "Hours", 
              content: "Mon-Fri: 9AM - 6PM",
              animate : "fade-down" 
            },
          ].map((item, index) => (
            <div
              key={item.title}
              data-aos={item.animate}
              className="hover:shadow-slate-50 shadow-md shadow-slate-800 hover:shadow-2xl   hover:-translate-y-2 transition-all duration-300 ease-in-out transform bg-slate-800 "
            >
              <div className="h-full  border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-lg">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="relative w-full p-5 my-5">
          {/* Background Image */}
          <Image
            src={bgImg}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="-z-10 rounded-xl"
          />

          <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

          {/* Content */}
          <div className="flex flex-col justify-center items-center my-10 max-w-2xl mx-auto rounded-xl border border-white/20  p-4  bg-black opacity-60 backdrop-blur-lg hover:shadow-slate-50 shadow-md shadow-slate-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <PageTitle heading="Send us a Message" />

            <form className="flex flex-col justify-center space-y-6 py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full px-4 py-2 rounded-lg bg-white backdrop-blur-sm border border-gray-200 focus:outline-none text-slate-800 focus:ring-2 focus:ring-primary min-h-[150px]"
                />
              </div>
              <div  className="w-full z-0 flex justify-center items-center">
                <CustomButton title="Submit" />
              </div>
            </form>
          </div>
        </section>

        {/* Contact Form */}

        {/* Map */}
        <div className="mt-16">
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl h-[400px] relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.813177399023!2d77.32600704999999!3d28.5355161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551f427fbfd%3A0xc7f21e67a0f5d7!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2s!4v1709653282000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
