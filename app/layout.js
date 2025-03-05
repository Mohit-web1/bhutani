"use client"; // Ensure this runs only on the client side

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";
import AOS from "aos";
import "aos/dist/aos.css"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', refreshAOS);

    return () => {
      window.removeEventListener('scroll', refreshAOS);
    };
  }, []); 

  return (
    <html lang="en">
      <head>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
      {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}