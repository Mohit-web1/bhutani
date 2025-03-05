"use client";

import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import Img from "@/public/assets/cont.jpg";
import Image from "next/image";

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
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Get in Touch
          </h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FaPhone, title: "Phone", content: "+1 (555) 123-4567" },
            {
              icon: FaEnvelope,
              title: "Email",
              content: "contact@example.com",
            },
            {
              icon: FaMapMarkerAlt,
              title: "Address",
              content: "123 Business Ave, Suite 100",
            },
            { icon: FaClock, title: "Hours", content: "Mon-Fri: 9AM - 6PM" },
          ].map((item, index) => (
            <div
              key={item.title}
              className="transform transition-all duration-300 hover:-translate-y-1 bg-slate-500 rounded-xl"
            >
              <div className="h-full  border border-white/20 bg-white/10 backdrop-blur-lg p-6 shadow-lg">
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <div className="max-w-2xl mx-auto rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg p-8 shadow-lg bg-slate-500">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Send us a Message
            </h2>
            <form className="space-y-6">
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
                  className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg h-[400px] relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986790365237!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1696824037105!5m2!1sen!2s"
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
